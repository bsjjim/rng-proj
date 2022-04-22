package com.lotterental.rng.demo.example.model;


import java.util.List;
import java.util.Map;

import com.lotterental.rng.core.base.BaseModel;
import com.lotterental.rng.demo.example.vo.ValidationVo;

import lombok.Data;

@Data
public class ValidationModel {
	private String name;
	private int age;
	private int height;
	private String grade;
	private Map<String, Object> testMap;
	private List<Map<String, Object>> testList;

    public ValidationVo build(BaseModel baseModel) {
        ValidationModel validationModel = (ValidationModel) baseModel;
        return ValidationVo.builder()
        		.name(validationModel.getName())
        		.age(validationModel.getAge())
        		.height(validationModel.getHeight())
        		.grade(validationModel.getGrade())
        		.testMap(validationModel.getTestMap())
        		.testList(validationModel.getTestList())
                .build();
    }

    public ValidationVo build() {
        return ValidationVo.builder()
        		.name(name)
        		.age(age)
        		.height(height)
        		.grade(grade)
        		.testMap(testMap)
        		.testList(testList)
                .build();
    }

}
