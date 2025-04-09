// import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
// import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./Login.css";
// import { clsx } from "keycloakify/tools/clsx";
// import { Link, Typography } from "@mui/material";
//  import Checkbox from '@mui/material/Checkbox';
//  import FormControlLabel from '@mui/material/FormControlLabel';
 import Button from '@mui/material/Button';
 
export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const {  } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const {  realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;

    const { msg } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={msg("loginAccountTitle")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            infoNode={<></>}
            socialProvidersNode={<></>}>
                        <form
                            id="kc-form-login"
                            className="loginbox__form"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={url.loginAction}
                            method="post"
                        >
                            {!usernameHidden && (
                                <div className="loginbox__inputs-container">
                                    <TextField
                                       sx={{ width: "100%",  pb: 1 }}
                                        label={!realm.loginWithEmailAllowed
                                            ? msg("username")
                                            : !realm.registrationEmailAsUsername
                                                ? msg("usernameOrEmail")
                                                : msg("email")}
                                        tabIndex={2}
                                        variant="outlined"
                                        name="username"
                                        defaultValue={login.username ?? ""}
                                        autoFocus
                                        autoComplete="username"
                                        error={messagesPerField.existsError("username", "password")}
                                        helperText={messagesPerField.existsError("username", "password") && (
                                            <span
                                                id="input-error"
                                                aria-live="polite"
                                                dangerouslySetInnerHTML={{
                                                    __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            )}

                            <div className="loginbox__inputs-container">
                                <FormControl sx={{ width: "100%",  pb: 2 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">{msg("password")}</InputLabel>
                                    <OutlinedInput
                                        tabIndex={3}
                                        name="password"
                                        autoComplete="current-password"
                                        error={messagesPerField.existsError("username", "password")}
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    onMouseDown={e => e.preventDefault}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />

                                    {usernameHidden && messagesPerField.existsError("username", "password") && (
                                        <FormHelperText id="standard-weight-helper-text">
                                            <span
                                                aria-live="polite"
                                                dangerouslySetInnerHTML={{
                                                    __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                                }}
                                            />
                                        </FormHelperText>
                                    )}
                                </FormControl>
                            </div>
                            <div className="button-container">
                                <div id="kc-form-options">
                                    {/* {realm.rememberMe && !usernameHidden && (
                                        <FormControlLabel control={
                                            <Checkbox
                                                defaultChecked={!!login.rememberMe}
                                                tabIndex={5}
                                                name="rememberMe"
                                            />}
                                            label={msg("rememberMe")}
                                        />
                                    )} */}
                                </div>
                                
                                {realm.resetPasswordAllowed && (
                                    <span className="forgot-password loginbox__secondary_button">
                                        <a id="recover_password"
                                            href={url.loginResetCredentialsUrl}>
                                            {msg("doForgotPassword")}
                                        </a>
                                    </span>
                                )}
                            </div>

                            <div id="kc-form-buttons"  className="loginbox__buttons-container">
                                <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                                <Button
                                    className="loginbox__button"
                                    tabIndex={7}
                                    variant="contained"
                                    disabled={isLoginButtonDisabled}
                                    name="login"
                                    type="submit">
                                    {msg("doLogIn")}
                                </Button>
                            </div>
                            <span>&nbsp;</span>
                        </form>
                <div className="register" id="register-container">
                    <div className="register__title">
                        <span id="register_title">{msg("noAccount")}{" "}</span>
                    </div>
                    <a className="register__button" id="register" target="_blank" href="https://smartup.uz/smartup_online" >{msg("doRegister")}</a>
                </div>
        </Template>
    );
}