/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ValidationRule } from "../types/formfields";

export const validateField = (name: string, value: any, rules?: ValidationRule): string => {
    if (!rules) return "";
    
    if (rules.required && (value === undefined || value === null || value === "")) {
      return rules.errorMessage || `${name} is required`;
    }
    
    if (value === undefined || value === null || value === "") {
      return "";
    }
  
    if (typeof value === "string") {
      if (rules.minLength && value.length < rules.minLength) {
        return rules.errorMessage || `${name} must be at least ${rules.minLength} characters`;
      }
      
      if (rules.maxLength && value.length > rules.maxLength) {
        return rules.errorMessage || `${name} must be less than ${rules.maxLength} characters`;
      }
     
      if (rules.pattern && !rules.pattern.test(value)) {
        return rules.errorMessage || `${name} format is invalid`;
      }
    }
    
    if (rules.custom && !rules.custom(value)) {
      return rules.errorMessage || `${name} is invalid`;
    }
    
    return "";
  };