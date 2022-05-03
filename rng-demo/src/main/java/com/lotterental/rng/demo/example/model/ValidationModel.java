package com.lotterental.rng.demo.example.model;

import com.lotterental.rng.core.common.base.BaseModel;
import com.lotterental.rng.demo.example.vo.ValidationVo;

import lombok.Data;

@Data
public class ValidationModel {
	private String id;
	private String name;
	private String major;
	private int age;
	private int height;
	private int weight;

    public ValidationVo build(BaseModel baseModel) {
        ValidationModel validationModel = (ValidationModel) baseModel;
        return ValidationVo.builder()
        		.id(validationModel.getId())
        		.name(validationModel.getName())
        		.major(validationModel.getMajor())
        		.age(validationModel.getAge())
        		.height(validationModel.getHeight())
        		.weight(validationModel.getWeight())
                .build();
    }

    public ValidationVo build() {
        return ValidationVo.builder()
        		.id(id)
        		.name(name)
        		.major(major)
        		.age(age)
        		.height(height)
        		.weight(weight)
                .build();
    }

}
