package com.lotterental.rng.common.cnst;

/**
 * 프로젝트 내부의 공통 상수를 정의하기 위해 작성하였다.
 *
 * @author Byun Sang june
 * @version 1.0
 * @since 2017. 10. 19.
 */
public final class Constants {

	private Constants() {
	}

	public final class VAL {
		public static final String OK = "OK";
		public static final String FAIL = "FAIL";
	}

	public final class TRAN_STATUS {
		public static final String READY = "READY";
		public static final String OK = "OK";
		public static final String FAIL = "FAIL";
		public static final String RETRY = "RETRY";
	}

	public final class TYPE {
		public static final String STRING = "STRING";
		public static final String HTML = "HTML";
		public static final String OBJECT = "OBJECT";
		public static final String JSON = "JSON";
		public static final String MAP = "MAP";
		public static final String NONE = "NONE";
	}

	public final class EXCEPTION {
		public static final String DEFAULT = "1000";
		public static final String ACCESS_DENIED = "1001";
		public static final String BUSINESS = "1002";
		public static final String MCI_BUSINESS = "1003";
		public static final String JWT_BUSINESS = "1004";
		public static final String VALIDATION = "1005";
	}
	
	// // attribute data
	// public final class ATTRIBUTE {
	// public static final String REQUEST = "Request";
	// public static final String CACHE_DATA = "CachedData";
	// public static final String PLATFORM_DATA = "PlatformData";
	// public static final String FILE_DATA = "FileData";
	// }
	//
	// // error
	// public final class ERROR {
	// public final static int DEFAULT_ERROR_CODE = 0;
	// public final static String ERROR_CODE = "ErrorCode"; // 결과 코드값 (ex '0' 이상 일경우
	// 성공)
	// public final static String ERROR_MESG = "ErrorMesg"; // 에러 메시지
	// }
	//
	// // first row
	// public final class ERROR_FIRST_ROW {
	// public final static String ERROR_DATASET = "FirstRowStatus"; // exception
	// after firstrow
	// public final static String ERROR_CODE = ERROR.ERROR_CODE;
	// public final static String ERROR_MESG = ERROR.ERROR_MESG;
	// }
	//
	// public static final String PERFORMANCE_LOGGER = "com.shinhancard.nap.performance";

}