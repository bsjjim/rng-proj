package com.lotterental.rng.demo.config.security.vo;

import groovy.lang.Delegate;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class UserDetailsVO {}
/*
@RequiredArgsConstructor
@Getter
public class UserDetailsVO implements UserDetails {
    @Delegate
    private final UserVO userVO;
    private final Collection<? extends GrantedAuthority> authorities;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
//        return userVO.getUserPw();
        return "";
    }

    @Override
    public String getUsername() {
//        return userVO.getUserEmail();
        return "";
    }

    @Override
    public boolean isAccountNonExpired() {
//        return userVO.getIsEnable();
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
//        return userVO.getIsEnable();
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
//        return userVO.getIsEnable();
        return true;
    }

    @Override
    public boolean isEnabled() {
//        return userVO.getIsEnable();
        return true;
    }
}
*/
