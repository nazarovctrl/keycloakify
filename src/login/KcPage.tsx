import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import { tss } from "tss-react/mui"

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const Login = lazy(() => import("./pages/Login"));
const LoginOtp = lazy(() => import("./pages/LoginOtp"));
const LoginPageExpired = lazy(() => import("./pages/LoginPageExpired"));
const LoginPassword = lazy(() => import("./pages/LoginPassword"));
const LoginResetPassword = lazy(() => import("./pages/LoginResetPassword"));
const LoginUpdatePassword = lazy(() => import("./pages/LoginUpdatePassword"));
const LogoutConfirm = lazy(() => import("./pages/LogoutConfirm"));
const Terms = lazy(() => import("./pages/Terms"));

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    const {classes} = useStyles(); 
    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl": return (
                                        <Login
                                            {...{ kcContext, i18n, classes }}
                                            Template={Template}
                                            doUseDefaultCss={false}
                                    />);
                    case "login-otp.ftl": return (
                                            <LoginOtp
                                            {...{ kcContext, i18n, classes }}
                                                Template={Template}
                                                doUseDefaultCss={true}
                                            />
                                        );
                    case "login-page-expired.ftl": return (
                                                    <LoginPageExpired
                                                        {...{ kcContext, i18n, classes }}
                                                        Template={Template}
                                                        doUseDefaultCss={true}
                                                    />
                                                );
                    case "login-password.ftl": return (
                                                <LoginPassword
                                                        {...{ kcContext, i18n, classes }}
                                                        Template={Template}
                                                        doUseDefaultCss={true}
                                                    />
                                                );
                    case "login-reset-password.ftl": return (
                                                        <LoginResetPassword
                                                        {...{ kcContext, i18n, classes }}
                                                            Template={Template}
                                                            doUseDefaultCss={true}
                                                        />
                                                    );
                    case "login-update-password.ftl": return (
                                                        <LoginUpdatePassword
                                                            {...{ kcContext, i18n, classes }}
                                                            Template={Template}
                                                            doUseDefaultCss={true}
                                                        />
                                                    );
                    case "logout-confirm.ftl": return (
                                                    <LogoutConfirm
                                                        {...{ kcContext, i18n, classes }}
                                                        Template={Template}
                                                        doUseDefaultCss={true}
                                                    />
                                                );
                    case "terms.ftl": return (
                                            <Terms
                                                {...{ kcContext, i18n, classes }}
                                                Template={Template}
                                                doUseDefaultCss={true}
                                            />
                                    );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const useStyles = tss.create( ({  }) => ({
    kcHtmlClass: {  },
    kcBodyClass: { }
  } satisfies { [key in ClassKey]?: unknown; }));
/*
const classes = {
    kcHtmlClass:"",
    kcBodyClass:""
} satisfies { [key in ClassKey]?: string };
*/
