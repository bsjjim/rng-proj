package com.lotterental.rng.utils;

import com.lotterental.rng.core.common.exception.BusinessException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.poifs.crypt.EncryptionInfo;
import org.apache.poi.poifs.crypt.EncryptionMode;
import org.apache.poi.poifs.crypt.Encryptor;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.util.IOUtils;
import org.apache.poi.xssf.streaming.SXSSFSheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Slf4j
@Component
public class ExcelUtil {

    private static String uploadTempPath;
    
    @Value("${nap.excel.temp:test}")
    public void setPath(String value){
        uploadTempPath = value; 
    }

    // Field 전체 조회
    static void getAllFields(Class<?> cls, List<Field> fs){
        fs.addAll(Arrays.asList(cls.getDeclaredFields()));
        if( cls.getSuperclass() != null && !"java.lang.Object".equals(cls.getName())){
            getAllFields(cls.getSuperclass(), fs);
        }
    }

    /**
     * 공통 엑셀 다운로드 (작업중)
     * @param cls 모델 클래스 
     * @param list 데이터
     * @param sheetName 엑셀시트명
     * @param arrHeaders 엑셀 헤더
     * @param arrHeaders 엑셀 헤더 머지
     * @param arrColumns 엑셀 컬럼명
     * @return
     * @throws Exception
     */
    public static ByteArrayInputStream exportExcel(
        Class<?> cls
      , List<?> list
      , String sheetName
      , String[] arrHeaders 
      , String[] arrMergeHeaders
      , String[] arrColumns
      ) throws Exception{
//        ByteArrayOutputStream out = new ByteArrayOutputStream();
//        SXSSFWorkbook workbook = null;
//        try{
//            long startTime = System.currentTimeMillis();
//
//            List<Method> ms = new ArrayList<>();
//            Arrays.stream(arrColumns).forEach(s->{
//                ms.add(Arrays.stream(cls.getMethods()).filter(m->m.getName().equals("get"+StringUtils.capitalize(s))).findFirst().get());
//            });
//
//            int columnStart = 0;
//            int rowHeaderStart = 0;
//            int rowDataStart = 1;
//            workbook = new SXSSFWorkbook();
//            workbook.setCompressTempFiles(true);
//
//            // excel header style
//            XSSFCellStyle headerStyle =  (XSSFCellStyle)workbook.createCellStyle();
////            headerStyle.setFillForegroundColor(new XSSFColor(IndexedColors.GREY_25_PERCENT, new DefaultIndexedColorMap()));
//            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
//            headerStyle.setAlignment(HorizontalAlignment.CENTER);
//            headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);
//            headerStyle.setBorderBottom(BorderStyle.THIN);
//            headerStyle.setBorderLeft(BorderStyle.THIN);
//            headerStyle.setBorderRight(BorderStyle.THIN);
//            headerStyle.setBorderTop(BorderStyle.THIN);
//            headerStyle.setWrapText(true);
//
//            // excel column style
//            XSSFCellStyle columnStyle = (XSSFCellStyle)workbook.createCellStyle();
//            columnStyle.setBorderBottom(BorderStyle.THIN);
//            columnStyle.setBorderLeft(BorderStyle.THIN);
//            columnStyle.setBorderRight(BorderStyle.THIN);
//            columnStyle.setBorderTop(BorderStyle.THIN);
//            columnStyle.setAlignment(HorizontalAlignment.LEFT);
//            columnStyle.setWrapText(true);
//
//
//            // 시트네임 설정
//            SXSSFSheet sh = (SXSSFSheet) workbook.createSheet();
//            workbook.setSheetName(0, sheetName);
//
//            // 헤더 머지 로직 추가
//
//            // 컬럼 헤더 생성
//            Row heading = sh.createRow(rowHeaderStart);
//
//            for(int i = 0; i < arrHeaders.length; i++) {
//                Cell cell = heading.createCell(i + columnStart);
//                cell.setCellValue(arrHeaders[i]);
//                cell.setCellStyle(headerStyle);
//            }
//
//            // 데이터 로우 생성
//            int columnNum = ms.size();
//            int rowDataNum  = list.size();
//
//            for (int rowNum = 0; rowNum < rowDataNum; rowNum++){
//                Row row = sh.createRow(rowNum + rowDataStart);
//                for( int cellNum = 0; cellNum < columnNum; cellNum++){
//                    Cell cell = row.createCell(cellNum + columnStart);
//                    cell.setCellStyle(columnStyle);
//                    cell.setCellValue(nullToString(String.valueOf(ms.get(cellNum).invoke(list.get(rowNum)))));
//                }
//
//                if(rowNum % 5000 == 0) {
//                    sh.flushRows();
//                }
//            }
//
////            sh.trackAllColumnsForAutoSizing();
//            for(int i = 0; i < arrHeaders.length; i++) {
//                sh.autoSizeColumn(i,true);
//                sh.setColumnWidth(i, (sh.getColumnWidth(i))+2048 );
//            }
//            log.debug("Create time is " + (System.currentTimeMillis() - startTime));
//
//            workbook.write(out);
//            out.close();
//
//            return new ByteArrayInputStream(out.toByteArray());
//        }catch(Exception e){
//            log.debug(e.getMessage());
//            e.printStackTrace();
//        }finally{
//            if (out != null){
//                out.close();
//            }
//            if(workbook != null){
//                workbook.close();
//            }
//        }
        return null;
    }
    
    private static List<Field> getFieldList(Class<?> cls, String[] arrColumns) {
	  List<Field> fieldList = new ArrayList<>();
      Arrays.stream(arrColumns).forEach(s-> {
          ReflectionUtils.doWithFields(cls, field -> {
          	if(StringUtils.equals(s, field.getName())) {
          		fieldList.add(field);
          	}
          });
      });
      
      return fieldList;
    }
     
    private static String getDataCellValueForDateTimeConvertor(Field field, Object dataCellObj) {
    	String dataCellValue = nullToString(String.valueOf(dataCellObj));
    	
    	if(ObjectUtils.isEmpty(field) || StringUtils.isBlank(dataCellValue)) {
    		return dataCellValue;
    	}

    	DateTimeFormat dateTimeFormat = field.getAnnotation(DateTimeFormat.class);
    	
    	if(ObjectUtils.isEmpty(dateTimeFormat)) {
    		return dataCellValue;
    	}
    	
    	String returnValue = null;
    	
    	if(LocalDateTime.class.isAssignableFrom(field.getType())) {
    		LocalDateTime parsedDataDateTime = (LocalDateTime) dataCellObj;
    		returnValue = parsedDataDateTime.format(DateTimeFormatter.ofPattern(dateTimeFormat.pattern()));
    	} else if(LocalDate.class.isAssignableFrom(field.getType())) {
    		LocalDate parsedDataDate = (LocalDate) dataCellObj;
    		returnValue = parsedDataDate.format(DateTimeFormatter.ofPattern(dateTimeFormat.pattern()));
    	} else {
        	SimpleDateFormat sdf = new SimpleDateFormat(dateTimeFormat.pattern());
        	returnValue = sdf.format(dataCellObj);
    	}
    	    	
    	return returnValue;
    }

    
    /**
     * 공통 엑셀 다운로드 
     * @param cls 모델 클래스 
     * @param list 데이터
     * @param sheetName 엑셀시트명
     * @param arrHeaders 엑셀 헤더
     * @param arrColumns 엑셀 컬럼명
     * @return
     * @throws Exception
     */
    public static ByteArrayInputStream exportExcel(
        Class<?> cls
        , List<?> list
        , String sheetName
        , String[] arrHeaders 
        , String[] arrColumns
        )throws Exception{
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        SXSSFWorkbook workbook = null;
        try{
            long startTime = System.currentTimeMillis();
            
            List<Field> fieldList = getFieldList(cls, arrColumns);           
            List<Method> ms = new ArrayList<>();
            Arrays.stream(arrColumns).forEach(s->{
                ms.add(Arrays.stream(cls.getMethods()).filter(m->m.getName().equals("get"+StringUtils.capitalize(s))).findFirst().get());
            });

            int columnStart = 0;
            int rowHeaderStart = 0;
            int rowDataStart = 1;
            workbook = new SXSSFWorkbook();
            //workbook.setCompressTempFiles(true);

            // excel header style
            XSSFCellStyle headerStyle =  (XSSFCellStyle)workbook.createCellStyle();
//            headerStyle.setFillForegroundColor(new XSSFColor(IndexedColors.GREY_25_PERCENT, new DefaultIndexedColorMap()));
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);
            headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setBorderLeft(BorderStyle.THIN);
            headerStyle.setBorderRight(BorderStyle.THIN);
            headerStyle.setBorderTop(BorderStyle.THIN);
            headerStyle.setWrapText(true);
            
            // excel column style
            XSSFCellStyle columnStyle = (XSSFCellStyle)workbook.createCellStyle();
            columnStyle.setBorderBottom(BorderStyle.THIN);
            columnStyle.setBorderLeft(BorderStyle.THIN);
            columnStyle.setBorderRight(BorderStyle.THIN);
            columnStyle.setBorderTop(BorderStyle.THIN);
            columnStyle.setAlignment(HorizontalAlignment.LEFT);
            columnStyle.setWrapText(true);


            // 시트네임 설정
            SXSSFSheet sh = (SXSSFSheet) workbook.createSheet();
            workbook.setSheetName(0, sheetName);
            
            // 컬럼 헤더 생성
            Row heading = sh.createRow(rowHeaderStart);
            
            for(int i = 0; i < arrHeaders.length; i++) {
                Cell cell = heading.createCell(i + columnStart);
                cell.setCellValue(arrHeaders[i]);
                cell.setCellStyle(headerStyle);
            }
            
            // 데이터 로우 생성
            int columnNum = ms.size();
            int rowDataNum  = list.size();

            for (int rowNum = 0; rowNum < rowDataNum; rowNum++){
                Row row = sh.createRow(rowNum + rowDataStart);
                for( int cellNum = 0; cellNum < columnNum; cellNum++){
                    Cell cell = row.createCell(cellNum + columnStart);
                    cell.setCellStyle(columnStyle);
                    cell.setCellValue(getDataCellValueForDateTimeConvertor(fieldList.get(cellNum), ms.get(cellNum).invoke(list.get(rowNum))));
                }
                
                if(rowNum % 5000 == 0) { 
                    sh.flushRows(); 
                } 
            }
            
//            sh.trackAllColumnsForAutoSizing();
            for(int i = 0; i < arrHeaders.length; i++) {
                sh.autoSizeColumn(i,true);
                sh.setColumnWidth(i, (sh.getColumnWidth(i))+2048 ); 
            }
            log.debug("Create time is " + (System.currentTimeMillis() - startTime));
            
            workbook.write(out);
            out.close();
            return new ByteArrayInputStream(out.toByteArray());
        }catch(Exception e){
            log.debug(e.getMessage());
            e.printStackTrace();
        }finally{
            if (out != null){
                out.close();
            }
            if(workbook != null){
//                workbook.close();
            }
        }
        return null;
    }

        /**
     * 공통 엑셀 다운로드 
     * @param cls 모델 클래스 
     * @param list 데이터
     * @param sheetName 엑셀시트명
     * @param arrHeaders 엑셀 헤더
     * @param arrColumns 엑셀 컬럼명
     * @return
     * @throws Exception
     */
    public static ByteArrayInputStream exportExcel(
        Class<?> cls
        , List<?> list
        , String password
        , String sheetName
        , String[] arrHeaders 
        , String[] arrColumns
        )throws Exception{
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        SXSSFWorkbook workbook = null;
        try{
            long startTime = System.currentTimeMillis();
            
            List<Field> fieldList = getFieldList(cls, arrColumns);
            List<Method> ms = new ArrayList<>();
            Arrays.stream(arrColumns).forEach(s->{
                ms.add(Arrays.stream(cls.getMethods()).filter(m->m.getName().equals("get"+StringUtils.capitalize(s))).findFirst().get());
            });

            int columnStart = 0;
            int rowHeaderStart = 0;
            int rowDataStart = 1;
            workbook = new SXSSFWorkbook();
            //workbook.setCompressTempFiles(true);

            // excel header style
            XSSFCellStyle headerStyle =  (XSSFCellStyle)workbook.createCellStyle();
//            headerStyle.setFillForegroundColor(new XSSFColor(IndexedColors.GREY_25_PERCENT, new DefaultIndexedColorMap()));
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
            headerStyle.setAlignment(HorizontalAlignment.CENTER);
            headerStyle.setVerticalAlignment(VerticalAlignment.CENTER);
            headerStyle.setBorderBottom(BorderStyle.THIN);
            headerStyle.setBorderLeft(BorderStyle.THIN);
            headerStyle.setBorderRight(BorderStyle.THIN);
            headerStyle.setBorderTop(BorderStyle.THIN);
            headerStyle.setWrapText(true);
            
            // excel column style
            XSSFCellStyle columnStyle = (XSSFCellStyle)workbook.createCellStyle();
            columnStyle.setBorderBottom(BorderStyle.THIN);
            columnStyle.setBorderLeft(BorderStyle.THIN);
            columnStyle.setBorderRight(BorderStyle.THIN);
            columnStyle.setBorderTop(BorderStyle.THIN);
            columnStyle.setAlignment(HorizontalAlignment.LEFT);
            columnStyle.setWrapText(true);


            // 시트네임 설정
            SXSSFSheet sh = (SXSSFSheet) workbook.createSheet();
            workbook.setSheetName(0, sheetName);
            
            // 컬럼 헤더 생성
            Row heading = sh.createRow(rowHeaderStart);
            
            for(int i = 0; i < arrHeaders.length; i++) {
                Cell cell = heading.createCell(i + columnStart);
                cell.setCellValue(arrHeaders[i]);
                cell.setCellStyle(headerStyle);
            }
            
            // 데이터 로우 생성
            int columnNum = ms.size();
            int rowDataNum  = list.size();

            for (int rowNum = 0; rowNum < rowDataNum; rowNum++){
                Row row = sh.createRow(rowNum + rowDataStart);
                for( int cellNum = 0; cellNum < columnNum; cellNum++){
                    Cell cell = row.createCell(cellNum + columnStart);
                    cell.setCellStyle(columnStyle);
                    cell.setCellValue(getDataCellValueForDateTimeConvertor(fieldList.get(cellNum), ms.get(cellNum).invoke(list.get(rowNum))));
                }
                
                if(rowNum % 5000 == 0) { 
                    sh.flushRows(); 
                } 
            }
            
//            sh.trackAllColumnsForAutoSizing();
            for(int i = 0; i < arrHeaders.length; i++) {
                sh.autoSizeColumn(i,true);
                sh.setColumnWidth(i, (sh.getColumnWidth(i))+2048 ); 
            }
            log.debug("Create time is " + (System.currentTimeMillis() - startTime));
            
            write(workbook,out,password);
            out.close();
            return new ByteArrayInputStream(out.toByteArray());
        }catch(Exception e){
            log.debug(e.getMessage());
            e.printStackTrace();
        }finally{
            if (out != null){
                out.close();
            }
            if(workbook != null){
//                workbook.close();
            }
        }
        return null;
    }

    /**
     * 엑셀 파서 - 컬럼 정보 
     * @param multipartFile 파일
     * @param columnName 컬럼 리스트
     * @param sheetNum 시트 넘버
     * @param rowStartNum 시작 행
     * @return List<Map>
     * @throws Exception
     */
    @SuppressWarnings("unused")
//    public static List<Map<String, Object>> parseExcel(MultipartFile multipartFile, String[] columnName,int sheetNum,int rowStartNum) throws Exception {
//
//		List<Map<String,Object>> result = new ArrayList<Map<String,Object>>();
//
//        Integer fileFormat = getFileFormat(multipartFile);
//        if(fileFormat == -1){
//            throw new BusinessException("파일 형식이 맞지 않습니다.");
//        }
//
//        File file = convert(multipartFile).orElseThrow(() -> new IllegalArgumentException("error: MultipartFile -> File convert fail"));
//		FileInputStream fileIn = null;
//
//		String fileName = file.getName();
//		String filePath = file.getCanonicalPath();
//    	String srcFilePath = filePath;
//		//String decFilePath = fileTempUploadPath + fileName;
//
//        /*
//		// 파일암호화 해제
//		Map<String,Object> fasooResult = FasooUtil.decrypt(srcFilePath, decFilePath);
//
//		boolean decResult = (Boolean) fasooResult.get("result");
//		int fileType = (int) fasooResult.get("file_type");
//		String errorMsg = ComStringUtil.nullTostring(fasooResult.get("error_msg"));
//
//
//		if(decResult){
//			// 암호화 파일일 경우
//			fileIn = new FileInputStream(new File(decFilePath));
//		}else {
//			if(fileType == 29){
//				// 암호화가 걸리지 않은 파일
//				fileIn = new FileInputStream(new File(srcFilePath));
//			}else {
//				// 암호화 파일, 일반 파일이 아닐경우
//				//throw new ComBizException(errorMsg);
//			}
//		}
//		*/
//        fileIn = new FileInputStream(new File(srcFilePath));
//
//        try{
//            if(fileFormat == 1){
//                    HSSFWorkbook hwb = loadWorkbook(fileIn);
//                    HSSFSheet hsheet = hwb.getSheetAt(sheetNum);
//
//                    result =  parseSheet( hsheet ,columnName, rowStartNum);
//            }else if(fileFormat == 2){
//                    XSSFWorkbook xwb = loadXSSFWorkbook(fileIn);
//                    XSSFSheet xsheet = xwb.getSheetAt(sheetNum);
//
//                    result = parseXSSFSheet(xsheet ,columnName, rowStartNum);
//            }
//            /*
//            if(decResult) {
//                // 암호화 파일 삭제
//                deleteFile(decFilePath);
//            }
//            */
//        }catch(IllegalArgumentException e){
//            throw new IllegalArgumentException(e.getMessage());
//        }catch(Exception e){
//            throw new Exception(e);
//
//        }finally{
//            if(fileIn!=null){
//                fileIn.close();
//            }
//        }
//
//		return result;
//	}
//
//
//    /**
//     * 엑셀 파서 - 모델 클래스
//     * DRM 적용 예정
//     * @param multipartFile 파일
//     * @param clazz 모델 클레스
//     * @param sheetNum 시트 넘버
//     * @param rowStartNum 시작행
//     * @return List<Model>
//     * @throws Exception
//     */
//    @SuppressWarnings("unused")
//    public static <T> List<T> parseExcel(MultipartFile multipartFile, Class<T> clazz,int sheetNum,int rowStartNum) throws Exception {
//
//		List<T> result = null;
//
//        Integer fileFormat = getFileFormat(multipartFile);
//        if(fileFormat == -1){
//            throw new BusinessException("파일 형식이 맞지 않습니다.");
//        }
//
//        File file = convert(multipartFile).orElseThrow(() -> new IllegalArgumentException("error: MultipartFile -> File convert fail"));
//		FileInputStream fileIn = null;
//
//		String fileName = file.getName();
//		String filePath = file.getCanonicalPath();
//    	String srcFilePath = filePath;
//		//String decFilePath = fileTempUploadPath + fileName;
//
//        /*
//		// 파일암호화 해제
//		Map<String,Object> fasooResult = FasooUtil.decrypt(srcFilePath, decFilePath);
//
//		boolean decResult = (Boolean) fasooResult.get("result");
//		int fileType = (int) fasooResult.get("file_type");
//		String errorMsg = ComStringUtil.nullTostring(fasooResult.get("error_msg"));
//
//
//		if(decResult){
//			// 암호화 파일일 경우
//			fileIn = new FileInputStream(new File(decFilePath));
//		}else {
//			if(fileType == 29){
//				// 암호화가 걸리지 않은 파일
//				fileIn = new FileInputStream(new File(srcFilePath));
//			}else {
//				// 암호화 파일, 일반 파일이 아닐경우
//				//throw new ComBizException(errorMsg);
//			}
//		}
//		*/
//        fileIn = new FileInputStream(new File(srcFilePath));
//
//        try{
//            if(fileFormat == 1){
//                    HSSFWorkbook hwb = loadWorkbook(fileIn);
//                    HSSFSheet hsheet = hwb.getSheetAt(sheetNum);
//
//                    result =  parseSheet( hsheet ,clazz, rowStartNum);
//            }else if(fileFormat == 2){
//                    XSSFWorkbook xwb = loadXSSFWorkbook(fileIn);
//                    XSSFSheet xsheet = xwb.getSheetAt(sheetNum);
//
//                    result = parseXSSFSheet(xsheet ,clazz, rowStartNum);
//            }
//            /*
//            if(decResult) {
//                // 암호화 파일 삭제
//                deleteFile(decFilePath);
//            }
//            */
//        }catch(IllegalArgumentException e){
//            throw new IllegalArgumentException(e.getMessage());
//        }catch(Exception e){
//            throw new Exception(e);
//
//        }finally{
//            if(fileIn!=null){
//                fileIn.close();
//            }
//        }
//        return result;
//	}

//    @SuppressWarnings("unused")
//	private static HSSFWorkbook loadWorkbook(String filepath) throws Exception, FileNotFoundException, IOException {
//
//        FileInputStream fileIn = new FileInputStream(filepath);
//        HSSFWorkbook wb = loadWorkbook(fileIn);
//        fileIn.close();
//
//        return wb;
//    }
//
//    @SuppressWarnings("unused")
//    private static XSSFWorkbook loadXSSFWorkbook(String filepath) throws Exception, FileNotFoundException, IOException {
//
//        FileInputStream fileIn = new FileInputStream(filepath);
//        XSSFWorkbook wb = loadXSSFWorkbook(fileIn);
//        fileIn.close();
//
//        return wb;
//    }
//
//    private static HSSFWorkbook loadWorkbook(InputStream fileIn) throws Exception {
//        HSSFWorkbook wb = new HSSFWorkbook();
//
//        try {
//            POIFSFileSystem fs = new POIFSFileSystem(fileIn);
//            wb = new HSSFWorkbook(fs);
//
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//
//        return wb;
//    }
//
//    private static XSSFWorkbook loadXSSFWorkbook(InputStream fileIn) throws Exception {
//        XSSFWorkbook wb = new XSSFWorkbook();
//
//        try {
//            wb = new XSSFWorkbook(fileIn);
//
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//
//        return wb;
//    }
//
//    private static List<Map<String, Object>> parseSheet(HSSFSheet sheet,String[] columnName  ,int start) throws  Exception {
//
//        long rowCnt = sheet.getPhysicalNumberOfRows();
//        long startTime = System.currentTimeMillis();
//        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
//
//        for(int i = start; i < rowCnt; i++){
//            HSSFRow row = sheet.getRow(i);
//            if(row != null){
//
//                Map<String, Object> resultmap = mappingColumn(row,columnName);
//                if (resultmap != null) {
//                    list.add(resultmap);
//                }
//            }
//        }
//
//        log.debug("Excel load time is " + (System.currentTimeMillis() - startTime));
//
//
//        return list;
//    }
//
//    private static List<Map<String, Object>> parseXSSFSheet(XSSFSheet sheet, String[] columnName, int start) throws Exception {
//
//
//        long rowCnt = sheet.getPhysicalNumberOfRows();
//        long startTime = System.currentTimeMillis();
//        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
//
//        for(int i = start; i < rowCnt; i++){
//            XSSFRow row = sheet.getRow(i);
//            if(row != null){
//
//                Map<String, Object> resultmap = mappingColumn(row,columnName);
//                if (resultmap != null) {
//                    list.add(resultmap);
//                }
//            }
//        }
//
//        log.debug("Excel load time is " + (System.currentTimeMillis() - startTime));
//
//
//        return list;
//    }
//
//    private static <T> List<T> parseSheet(HSSFSheet sheet, Class<T> clazz  ,int start) throws  Exception {
//
//
//        long rowCnt = sheet.getPhysicalNumberOfRows();
//        long startTime = System.currentTimeMillis();
//        List<T> list = new ArrayList<>();
//
//        for(int i = start; i < rowCnt; i++){
//            HSSFRow row = sheet.getRow(i);
//            if(row != null){
//                list.add(mappingColumn(row,clazz));
//            }
//        }
//
//        log.debug("Excel load time is " + (System.currentTimeMillis() - startTime));
//
//
//        return list;
//    }
//
//    private static <T> List<T> parseXSSFSheet(XSSFSheet sheet,Class<T> clazz , int start) throws Exception {
//
//
//        long rowCnt = sheet.getPhysicalNumberOfRows();
//        long startTime = System.currentTimeMillis();
//        List<T> list = new ArrayList<>();
//
//        for(int i = start; i < rowCnt; i++){
//            XSSFRow row = sheet.getRow(i);
//            if(row != null){
//                list.add(mappingColumn(row,clazz));
//            }
//        }
//
//        log.debug("Excel load time is " + (System.currentTimeMillis() - startTime));
//        return list;
//    }

//    private static Map<String,Object> mappingColumn(HSSFRow row, String[] ColumnName) throws Exception {
//    	int count = 0;
//    	String cellValue = null;
//		Map<String,Object> result = new HashMap<String,Object>();
//
//    	for(int i=0; i < ColumnName.length ;i++){
//    		cellValue = getValue(row.getCell(i));
//    		if(cellValue != null &&cellValue.length() > 0 ) {
//    			result.put(ColumnName[i], cellValue.trim());
//    			count++;
//    		}
//    	}
//    	if(count > 0) {
//    		return result;
//    	}else{
//    		return null;
//    	}
//	}

//	private static Map<String,Object> mappingColumn(XSSFRow row, String[] ColumnName ) throws Exception {
//		int count = 0;
//		String cellValue = null;
//    	Map<String,Object> result = new HashMap<String,Object>();
//
//    	for(int i=0; i < ColumnName.length ;i++){
//    		cellValue = getValue(row.getCell(i) );
//    		if(cellValue != null &&cellValue.length() > 0 ) {
//    			result.put(ColumnName[i], cellValue.trim());
//    			count++;
//    		}
//    	}
//    	if(count > 0) {
//    		return result;
//    	}else{
//    		return null;
//    	}
//	}
//
//    private static  <T> T mappingColumn(HSSFRow row, Class<T> clazz)
//    throws IllegalAccessException,InstantiationException,NoSuchMethodException,InvocationTargetException{
//
//        String cellValue = null;
//
//        if(clazz == null){
//            throw new NullPointerException("null");
//        }
//
//        T instance = clazz.getConstructor().newInstance();
//        Field[] fields = clazz.getDeclaredFields();
//        for(int i = 0; i < fields.length; i++){
//            fields[i].setAccessible(true);
//            cellValue = getValue(row.getCell(i));
//            if(cellValue != null &&cellValue.length() > 0 ) {
//                String type = fields[i].getGenericType().getTypeName();
//                if(type.contains("int")){
//                    fields[i].set(instance,Integer.valueOf(cellValue));
//                } else if(type.contains("LocalDateTime")){
//                    String format = "yyyy-MM-dd HH:mm:ss";
//                    Annotation[] annotation = fields[i].getDeclaredAnnotations();
//                    for (Annotation ann : annotation ){
//                        if(ann instanceof DateTimeFormat){
//                            DateTimeFormat dateFormat = (DateTimeFormat)ann;
//                            format = dateFormat.pattern();
//                        }
//                    }
//                    fields[i].set(instance,LocalDateTime.parse(cellValue,DateTimeFormatter.ofPattern(format)));
//                } else if(type.contains("Long")){
//                    fields[i].set(instance,Long.valueOf(cellValue));
//                } else if(type.contains("Double")){
//                    fields[i].set(instance,Double.valueOf(cellValue));
//                } else if(type.contains("Float")){
//                    fields[i].set(instance,Float.valueOf(cellValue));
//                } else{
//                    fields[i].set(instance,cellValue);
//                }
//            }
//        }
//
//        return instance;
//	}
//
//    private static <T> T mappingColumn(XSSFRow row, Class<T> clazz)
//    throws IllegalAccessException,InstantiationException,NoSuchMethodException,InvocationTargetException{
//
//        String cellValue = null;
//
//        if(clazz == null){
//            throw new NullPointerException("null");
//        }
//
//        T instance = clazz.getConstructor().newInstance();
//        Field[] fields = clazz.getDeclaredFields();
//        for(int i = 0; i < fields.length; i++){
//            fields[i].setAccessible(true);
//            cellValue = getValue(row.getCell(i));
//            if(cellValue != null &&cellValue.length() > 0 ) {
//                String type = fields[i].getGenericType().getTypeName();
//                if(type.contains("int")){
//                    fields[i].set(instance,Integer.valueOf(cellValue));
//                } else if(type.contains("LocalDateTime")){
//                    String format = "yyyy-MM-dd HH:mm:ss";
//                    Annotation[] annotation = fields[i].getDeclaredAnnotations();
//                    for (Annotation ann : annotation ){
//                        if(ann instanceof DateTimeFormat){
//                            DateTimeFormat dateFormat = (DateTimeFormat)ann;
//                            format = dateFormat.pattern();
//                        }
//                    }
//                    fields[i].set(instance,LocalDateTime.parse(cellValue,DateTimeFormatter.ofPattern(format)));
//                } else if(type.contains("Long")){
//                    fields[i].set(instance,Long.valueOf(cellValue));
//                } else if(type.contains("Double")){
//                    fields[i].set(instance,Double.valueOf(cellValue));
//                } else if(type.contains("Float")){
//                    fields[i].set(instance,Float.valueOf(cellValue));
//                } else{
//                    fields[i].set(instance,cellValue);
//                }
//            }
//        }
//
//        return instance;
//    }
//
//    private static Integer getFileFormat(MultipartFile file) throws Exception
//	{
//		if (!"".equals(file.getOriginalFilename())) {
//		if (file.getOriginalFilename().toLowerCase().contains(".xlsx")) {
//			return 2;
//		}else if(file.getOriginalFilename().toLowerCase().contains(".xls")){
//				return 1;
//			}else{
//				return -1;
//			}
//		}
//		return -1;
//	}
//
//
//    @SuppressWarnings("unused")
//    private static Integer getFileFormat(File file) throws Exception
//	{
//		if (!"".equals(file.getName())) {
//		if (file.getName().toLowerCase().contains(".xlsx")) {
//			return 2;
//		}else if(file.getName().toLowerCase().contains(".xls")){
//				return 1;
//			}else{
//				return -1;
//			}
//		}
//		return -1;
//	}

//    private static String getValue(Cell cell) {
//
//        String content;
//
//        if (null == cell || cell.equals(null))
//            return "";
//
//        CellType cellType = cell.getCellType();
//        if(cellType == CellType.STRING){
//            content = cell.getStringCellValue();
//        } else if(cellType == CellType.NUMERIC){
//            if (DateUtil.isCellDateFormatted(cell)) {
//                content = DateFormatUtils.format(cell.getDateCellValue(), "yyyy-MM-dd HH:mm:ss");
//            } else {
//                content = doubleToString(cell.getNumericCellValue());
//            }
//        }else if(cellType == CellType.BOOLEAN){
//            content = String.valueOf(cell.getBooleanCellValue());
//        }else if(cellType == CellType.FORMULA){
//            CellType formulaType = cell.getCachedFormulaResultType();
//            if(formulaType == CellType.STRING){
//                content = cell.getStringCellValue();
//            }else if(formulaType == CellType.NUMERIC ){
//                if (DateUtil.isCellDateFormatted(cell)) {
//                    content = DateFormatUtils.format(cell.getDateCellValue(), "yyyy-MM-dd HH:mm:ss");
//                } else {
//                    content = doubleToString(cell.getNumericCellValue());
//                }
//            }else if(formulaType == CellType.BOOLEAN){
//                content = String.valueOf(cell.getBooleanCellValue());
//            }else {
//                content = "";
//            }
//        }else {
//            content = "";
//        }
//
//        return content;
//
//    }

    private static void write(SXSSFWorkbook workbook,OutputStream out, String password) throws IOException{
        if(StringUtils.isBlank(password)){
            //workbook.write(out);
            throw new BusinessException("암호 값은 필수 입니다.");
        }else{
            POIFSFileSystem fs = new POIFSFileSystem();
            EncryptionInfo info = new EncryptionInfo(EncryptionMode.standard);
            Encryptor enc = info.getEncryptor();
            enc.confirmPassword(password);

            ByteArrayOutputStream baos = null;
            ByteArrayInputStream bais = null;
            OutputStream os = null;
            OPCPackage opc = null;
            try{
                baos = new ByteArrayOutputStream();
                workbook.write(baos);
                bais = new ByteArrayInputStream(baos.toByteArray());
                
                opc = OPCPackage.open(bais);
                os = enc.getDataStream(fs);
                opc.save(os);
                os.close();
                opc.close();
                
            }catch(Exception e){
                throw new IllegalStateException("Excel encrypted error",e);
            }finally{
                IOUtils.closeQuietly(baos);
                IOUtils.closeQuietly(bais);
            }
            fs.writeFilesystem(out);
            fs.close();
        }
    }

    private static Optional<File> convert(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        File convertFile = new File(uploadTempPath + File.separator + UUID.randomUUID() + "-" + fileName);
        
        if (convertFile.createNewFile()) { // 바로 위에서 지정한 경로에 File이 생성됨 (경로가 잘못되었다면 생성 불가능)
            try (FileOutputStream fos = new FileOutputStream(convertFile)) { // FileOutputStream 데이터를 파일에 바이트 스트림으로 저장하기 위함
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }
        return Optional.empty();
    }

    
    @SuppressWarnings("unused")
    private static boolean deleteFile(String deleteFilePath) {
    	File deleteFile = new File(deleteFilePath);
    	boolean exists = deleteFile.exists();

    	if(exists){
    		if(deleteFile.delete()){
    			//success
    		}
    	} else {
    		return false;
    	}
    	
    	return true;
    }
    
    private static String nullToString(Object s){
        if(s == null || StringUtils.isEmpty(s.toString()) || s.toString().equals("null")){
            return "";
        }
        return s.toString();
    }
    private static String doubleToString(double d) {
        long lValue = (long) d;
        return (lValue == d) ? Long.toString(lValue) : Double.toString(d);
    }

    @SuppressWarnings("unused")
    private static double usedMemory(Runtime runtime) {
        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        double usedMemory = (double)(totalMemory - freeMemory) / (double)(1024 * 1024);
        return usedMemory;
    }
}
