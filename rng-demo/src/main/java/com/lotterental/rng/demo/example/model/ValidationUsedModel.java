package com.lotterental.rng.demo.example.model;

import com.lotterental.rng.core.common.base.BaseModel;
import com.lotterental.rng.demo.example.vo.ValidationUsedVo;

import lombok.Data;

@Data
public class ValidationUsedModel {
	private String id;
	private String name;
	private String major;
	private int age;
	private int height;
	private int weight;

    public ValidationUsedVo build(BaseModel baseModel) {
        ValidationUsedModel validationUsedModel = (ValidationUsedModel) baseModel;
        return ValidationUsedVo.builder()
        		.id(validationUsedModel.getId())
        		.name(validationUsedModel.getName())
        		.major(validationUsedModel.getMajor())
        		.age(validationUsedModel.getAge())
        		.height(validationUsedModel.getHeight())
        		.weight(validationUsedModel.getWeight())
                .build();
    }

    public ValidationUsedVo build() {
        return ValidationUsedVo.builder()
        		.id(id)
        		.name(name)
        		.major(major)
        		.age(age)
        		.height(height)
        		.weight(weight)
                .build();
    }

}
