import { HttpClient } from '../utils/httpClient';

const PATH = {
    createRule: '/rule/',
    getAllRules:"/rules/",
    getAtrribute:"/attributes/",
    ruleEvaluation:"/rules_evaluation/",
    getRuleById:"/rule"
  
};

const createRule = (payload, start, callback, error, next) => {
  start();
  return HttpClient.post(`${PATH.createRule}`, payload).then(callback).catch(error).finally(next);
};
const getAllRules = (namespace, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getAllRules}?namespace=${namespace}`,).then(callback).catch(error).finally(next);
};
const getRuleById = (rule_id,namespace, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getRuleById}?namespace=${namespace}&rule_id=${rule_id}`,).then(callback).catch(error).finally(next);
};
const getAllAtrribute = (namespace, start, callback, error, next) => {
  start();
  return HttpClient.get(`${PATH.getAtrribute}?namespace=${namespace}`,).then(callback).catch(error).finally(next);
};
const ruleEvaluation = (namespace,payload, start, callback, error, next) => {
  start();
  return HttpClient.post(`${PATH.ruleEvaluation}?namespace=${namespace}`,payload).then(callback).catch(error).finally(next);
};



export const RuleService = {
    createRule,
    getAllRules,
    ruleEvaluation,
    getAllAtrribute,
    getRuleById
  
};
