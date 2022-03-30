package com.lotterental.rng.util;

import com.lotterental.rng.http.rest.RestClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;


/**
 * http utils
 */
@Slf4j
public abstract class RestClientUtil {

    @Autowired
    RestClient restClient;

    public String getRestApi(String reqUrl, String params) {
        
        String responseStr = "";
        HttpHeaders headers = new HttpHeaders();
        
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
      
        String url = String.format(reqUrl, params);
        ResponseEntity<String> res = restClient.exchange(url, HttpMethod.GET, entity, new ParameterizedTypeReference<String>(){});

        if(res.getStatusCode() == HttpStatus.OK){
            responseStr = res.getBody();
        }else{
            responseStr = res.getStatusCode().toString();
        }
        return responseStr;
    }

    public String getRestApi(String reqUrl, String key, String params) {
            
        String responseStr = "";
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-Key", key);
        
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>("body", headers);
      
        String url = String.format(reqUrl, params);
        ResponseEntity<String> res = restClient.exchange(url, HttpMethod.GET, entity, new ParameterizedTypeReference<String>(){});

        if(res.getStatusCode() == HttpStatus.OK){
            responseStr = res.getBody();
        }else{
            responseStr = res.getStatusCode().toString();
        }
        return responseStr;

    }




}