import * as validator from 'validator';
import { createRule } from "react-use-validator";

export const required = createRule("required", value => !validator.isEmpty(value), "required");
