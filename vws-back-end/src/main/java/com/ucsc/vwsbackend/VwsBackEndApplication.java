package com.ucsc.vwsbackend;

import com.ucsc.vwsbackend.repository.userDao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@SpringBootApplication
public class VwsBackEndApplication {
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserRepository userRepository;

	public static final LocalDateTime GLOBAL_TIME = LocalDateTime.now();
	public static void main(String[] args) {
		SpringApplication.run(VwsBackEndApplication.class, args);
		System.out.println("Hello,Running Successfully!");

		System.out.println("Today: " + GLOBAL_TIME);
	}



//@PostConstruct
//	protected void init() {
//
//	List<Authority> authorityList=new ArrayList<>();
//
//	authorityList.add(createAuthority("Volunteer","Volunteer role"));
//
//	User user=new User();
//
//	user.setUserName("Ravindu");
//		user.setFirstName("Ravindu");
//		user.setLastName("Medagama");
//		user.setEmail("ravi@gmail.com");
//		user.setPhoneNumber("+94757894521");
//		user.setPassword(passwordEncoder.encode("123456789"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//
//		userRepository.save(user);
//
//	}
//
//
//private Authority createAuthority(String roleCode,String roleDescription) {
//	Authority authority=new Authority();
//		authority.setRoleCode(roleCode);
//	authority.setRoleDescription(roleDescription);
//		return authority;
//	}

//Chathura-Admin
//Malik-P_Coordinator
//Ravindu-Member
//pw-123456789

}

