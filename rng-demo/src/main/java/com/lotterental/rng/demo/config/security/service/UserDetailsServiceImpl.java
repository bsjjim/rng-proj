package com.lotterental.rng.demo.config.security.service;

import com.lotterental.rng.demo.config.security.exception.UserNotFoundException;
import com.lotterental.rng.demo.config.security.vo.UserDetailsVO;
import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collections;

public class UserDetailsServiceImpl {

}

/* 에러안나게 처리
@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetailsVO loadUserByUsername(String userEmail) {
        return userRepository.findByUserEmail(userEmail).map(
                u -> new UserDetailsVO(u, Collections.singleton(new SimpleGrantedAuthority(u.getRole().getValue()))))
                .orElseThrow(() -> new UserNotFoundException(userEmail));
    }
}
*/