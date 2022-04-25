package com.lotterental.rng.demo.config.security.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String userEmail){
        super(userEmail + " NotFoundException");
    }
}
