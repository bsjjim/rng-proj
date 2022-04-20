package com.lotterental.rng.demo.model;

import com.lotterental.rng.core.base.BaseModel;
import com.lotterental.rng.core.base.BaseVo;
import com.lotterental.rng.demo.vo.CopyVo;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;

@Slf4j
@Data
public class CopyModel implements BaseModel {
	private String originalFileName;
    private String logicalFileName;
    private String filePath;
    private String fileUri;
    
    public CopyVo build(BaseModel baseModel) {
        CopyModel fileModel = (CopyModel) baseModel;
        return CopyVo.builder()
        		.originalFileName(fileModel.getOriginalFileName())
        		.logicalFileName(fileModel.getLogicalFileName())
        		.filePath(fileModel.getFilePath())
        		.fileUri(fileModel.getFileUri())
        		.build();
    }

    public CopyVo build() {
        return CopyVo.builder()
        		.originalFileName(originalFileName)
        		.logicalFileName(logicalFileName)
        		.filePath(filePath)
        		.fileUri(fileUri)
                .build();
    }

    public <T extends BaseModel, Y extends BaseVo> void copy(T from, Y too) {

        Class<? extends BaseModel> fromClass = from.getClass();
        Field[] fromFields = fromClass.getDeclaredFields();

        Class<? extends BaseVo> tooClass = too.getClass();
        Field[] tooFields = tooClass.getDeclaredFields();

        if (fromFields != null && tooFields != null) {
            for (Field tooF : tooFields) {
                log.debug("toofield name {} and type {}", tooF.getName(), tooF.getType());
                try {
                    // Check if that fields exists in the other method
                    Field fromF = fromClass.getDeclaredField(tooF.getName());
                    fromF.setAccessible(true);
                    if (fromF.getType().equals(tooF.getType())) {
                        tooF.setAccessible(true);
//                        tooF.set(fromF, tooF);

                        ReflectionUtils.setField(tooF, too, fromF.get(from));
                        log.debug("tooF {} and fromF {}", tooF.get(too), fromF.get(from));
                        tooF.setAccessible(false);
                    }
                } catch (SecurityException e) {
                    log.error("{}", e.toString());
                } catch (NoSuchFieldException e) {
                    log.error("{}", e.toString());
                } catch (IllegalArgumentException e) {
                    log.error("{}", e.toString());
                } catch (IllegalAccessException e) {
                    throw new RuntimeException(e);
                }
            }
        }
    }
}