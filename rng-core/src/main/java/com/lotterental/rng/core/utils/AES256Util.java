package com.lotterental.rng.core.utils;

import lombok.extern.slf4j.Slf4j;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

/**
 * 암호화 클래스
 *
 * @author Byun Sang June
 * @version 1.0
 * @since 2022. 3. 2.
 */
@Slf4j
public class AES256Util {
	private static final String UTF8 = "UTF-8";
	private static String alg = "AES/CBC/PKCS5Padding";
	private String key;
	private String iv;
	
	public String encrypt(String text) {
		try {
			Cipher cipher = getCipher(Cipher.ENCRYPT_MODE);
            
            byte[] encrypted = cipher.doFinal(text.getBytes(UTF8));
            return Base64.getEncoder().encodeToString(encrypted);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            return "";
        }
	}
	
	public String decrypt(String cipherText) {
		try {
			Cipher cipher = getCipher(Cipher.DECRYPT_MODE);
            
			byte[] decodedBytes = Base64.getDecoder().decode(cipherText); 
            byte[] decrypted = cipher.doFinal(decodedBytes);
            return new String(decrypted, UTF8);
		} catch (Exception e) {
			log.error(e.getMessage(), e);
            return "";
		}
	}
	
	/**
	 * 
	 * @param 암/복호화 mode
	 * @return Cipher
	 */
	private Cipher getCipher(int mode) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException,
	InvalidAlgorithmParameterException {
		Cipher cipher = Cipher.getInstance(alg);
		
		SecretKey sKey = new SecretKeySpec(key.getBytes(), "AES");
		IvParameterSpec ivParameterSpec = new IvParameterSpec(iv.getBytes());
		cipher.init(mode, sKey, ivParameterSpec);
		return cipher;
	}
	
	public AES256Util(String key, String iv) {
		this.key = key;
		this.iv = iv;
		
	}
}
