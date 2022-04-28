(()=>{"use strict";var __webpack_modules__={637:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppController=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),Cryptr=__webpack_require__(607),twitter_api_sdk_1=__webpack_require__(138),{CLIENT_ID,CLIENT_SECRET,CLIENT_CALLBACK,REDIRECT}=process.env;CLIENT_SECRET||common_1.Logger.error("CLIENT_SECRET is Required","ENVIRONTMENT");const authClient=new twitter_api_sdk_1.auth.OAuth2User({client_id:CLIENT_ID,client_secret:CLIENT_SECRET,callback:CLIENT_CALLBACK,scopes:["users.read","tweet.read","offline.access"]});let AppController=class AppController{auth(){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){if(!CLIENT_SECRET||!REDIRECT)throw new common_1.BadRequestException;return{url:authClient.generateAuthURL({code_challenge_method:"s256",state:"nostate"})}}))}callback({code,state}){return(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){try{yield authClient.requestAccessToken(code);const client=new twitter_api_sdk_1.Client(authClient),data=yield client.users.findMyUser({"user.fields":["public_metrics","created_at","username","verified"]}),cryptr=new Cryptr(CLIENT_ID);if(!REDIRECT)throw new common_1.BadRequestException("Environtment REDIRECT is required");return{url:REDIRECT+"?state="+state+"&data="+cryptr.encrypt(JSON.stringify(data.data))}}catch(error){throw console.error(error),new common_1.BadRequestException}}))}};(0,tslib_1.__decorate)([(0,common_1.Get)("auth"),(0,common_1.Redirect)(),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[]),(0,tslib_1.__metadata)("design:returntype",Promise)],AppController.prototype,"auth",null),(0,tslib_1.__decorate)([(0,common_1.Get)("/callback"),(0,common_1.Redirect)(),(0,tslib_1.__param)(0,(0,common_1.Query)()),(0,tslib_1.__metadata)("design:type",Function),(0,tslib_1.__metadata)("design:paramtypes",[Object]),(0,tslib_1.__metadata)("design:returntype",Promise)],AppController.prototype,"callback",null),AppController=(0,tslib_1.__decorate)([(0,common_1.Controller)()],AppController),exports.AppController=AppController},598:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),config_1=__webpack_require__(793),app_controller_1=__webpack_require__(637);let AppModule=class AppModule{};AppModule=(0,tslib_1.__decorate)([(0,common_1.Module)({imports:[config_1.ConfigModule.forRoot()],controllers:[app_controller_1.AppController]})],AppModule),exports.AppModule=AppModule},9:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.environment=void 0,exports.environment={production:!0}},481:module=>{module.exports=require("@nestjs/common")},793:module=>{module.exports=require("@nestjs/config")},143:module=>{module.exports=require("@nestjs/core")},607:module=>{module.exports=require("cryptr")},81:module=>{module.exports=require("dotenv/config")},806:module=>{module.exports=require("helmet")},752:module=>{module.exports=require("tslib")},138:module=>{module.exports=require("twitter-api-sdk")}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}var __webpack_exports__={};(()=>{var exports=__webpack_exports__;Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(752);__webpack_require__(81);const core_1=__webpack_require__(143),app_module_1=__webpack_require__(598),environment_1=__webpack_require__(9),helmet=__webpack_require__(806);!function(){(0,tslib_1.__awaiter)(this,void 0,void 0,(function*(){const app=yield core_1.NestFactory.create(app_module_1.AppModule,{logger:environment_1.environment.production?["error","warn"]:["log","debug","warn","error"]});app.use(helmet.default());const port=process.env.PORT||3333;yield app.listen(port),console.log(`Application is running on: http://localhost:${port}`)}))}()})();var __webpack_export_target__=exports;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();