package com.ucsc.vwsbackend.services;

import com.ucsc.vwsbackend.dto.userPassword;
import com.ucsc.vwsbackend.repository.userDao.UserJdbcRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PasswordService {
    @Autowired
    UserJdbcRepository userJdbcRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    public long changePassword(userPassword userPassword, Long id) {
//      ToDo : match with current typed password with db password
        String dbPassword = userJdbcRepository.getUserKey(id);
        userPassword.setNewPassword(passwordEncoder.encode(userPassword.getNewPassword()));

        return userJdbcRepository.changePassword(userPassword.getNewPassword(),id);
    }
}
