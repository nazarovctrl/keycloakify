import type { MessageKey_defaultSet } from "keycloakify/login";

const messages: Record<MessageKey_defaultSet, string> = {
    doLogIn: "Kirish",
    doRegister: "Ro'yxatdan o'tish",
    doRegisterSecurityKey: "Ro'yxatdan o'tish",
    doCancel: "Bekor qilish",
    doSubmit: "Yuborish",
    doBack: "Orqaga",
    doYes: "Ha",
    doNo: "Yo'q",
    doContinue: "Davom etish",
    doIgnore: "E'tibor bermaslik",
    doAccept: "Qabul qilish",
    doDecline: "Rad etish",
    doForgotPassword: "Parolni unutdingizmi?",
    doClickHere: "Bu yerga bosing",
    doImpersonate: "Taqlid qilish",
    doTryAgain: "Qayta urinib ko'ring",
    doTryAnotherWay: "Boshqa usul bilan sinab ko'ring",
    doConfirmDelete: "O'chirishni tasdiqlash",
    errorDeletingAccount: "Hisobni o'chirishda xatolik yuz berdi",
    deletingAccountForbidden: "Sizning hisobingizni o'chirish uchun yetarli ruxsatlaringiz yo'q, administrator bilan bog'laning.",
    kerberosNotConfigured: "Kerberos sozlanmagan",
    kerberosNotConfiguredTitle: "Kerberos sozlanmagan",
    bypassKerberosDetail: "Siz Kerberos orqali kirmagansiz yoki brauzeringiz Kerberos kirish uchun sozlanmagan. Iltimos, boshqa usullar orqali kirish uchun davom eting",
    kerberosNotSetUp: "Kerberos sozlanmagan. Siz kira olmaysiz.",
    registerTitle: "Ro'yxatdan o'tish",
    loginAccountTitle: "Hisobingizga kiring",
    loginTitle: "{0} ga kirish",
    loginTitleHtml: "{0}",
    impersonateTitle: "{0} Foydalanuvchisini taqlid qilish",
    impersonateTitleHtml: "<strong>{0}</strong> Foydalanuvchisini taqlid qilish",
    realmChoice: "Realm",
    unknownUser: "Noma'lum foydalanuvchi",
    loginTotpTitle: "Mobil autentifikatorni sozlash",
    loginProfileTitle: "Hisob ma'lumotlarini yangilash",
    loginIdpReviewProfileTitle: "Hisob ma'lumotlarini yangilash",
    loginTimeout: "Kirish urunishingizning vaqti tugadi. Kirish boshidan boshlanadi.",
    reauthenticate: "Davom etish uchun qayta autentifikatsiya qiling",
    authenticateStrong: "Davom etish uchun kuchli autentifikatsiya talab qilinadi",
    oauthGrantTitle: "{0} ga ruxsat berish",
    oauthGrantTitleHtml: "{0}",
    oauthGrantInformation: "{0} ga ishonchingiz komil bo'lishi uchun uning ma'lumotlaringizni qanday ishlatishini o'rganing.",
    oauthGrantReview: "Siz ko'rib chiqishingiz mumkin",
    oauthGrantTos: "xizmat shartlari.",
    oauthGrantPolicy: "maxfiylik siyosati.",
    errorTitle: "Uzr so'raymiz...",
    errorTitleHtml: "Biz <strong>uzr so'raymiz</strong> ...",
    emailVerifyTitle: "Elektron pochta tasdiqlash",
    emailForgotTitle: "Parolingizni unutdingizmi?",
    updateEmailTitle: "Elektron pochtani yangilash",
    emailUpdateConfirmationSentTitle: "Tasdiqlash elektron pochtasi yuborildi",
    emailUpdateConfirmationSent: "{0} ga tasdiqlash elektron pochtasi yuborildi. Elektron pochtani yangilashni yakunlash uchun undagi ko'rsatmalarga rioya qiling.",
    emailUpdatedTitle: "Elektron pochta yangilandi",
    emailUpdated: "Hisob elektron pochtasi muvaffaqiyatli {0} ga yangilandi.",
    updatePasswordTitle: "Parolni yangilash",
    codeSuccessTitle: "Muvaffaqiyat kodi",
    codeErrorTitle: "Xato kodi: {0}",
    displayUnsupported: "So'ralgan displey turi qo'llab-quvvatlanmaydi",
    browserRequired: "Kirish uchun brauzer talab qilinadi",
    browserContinue: "Kirishni yakunlash uchun brauzer talab qilinadi",
    browserContinuePrompt: "Brauzerni ochib, kirishni davom ettirish? [h/y]:",
    browserContinueAnswer: "h",
    usb: "USB",
    nfc: "NFC",
    bluetooth: "Bluetooth",
    internal: "Ichki",
    unknown: "Noma'lum",
    termsTitle: "Foydalanish shartlari va shartlari",
    termsText: "",
    termsPlainText: "Foydalanish shartlari va shartlari aniqlanadi.",
    termsAcceptanceRequired: "Bizning foydalanish shartlarimizga rozilik bildirmasligingiz kerak.",
    acceptTerms: "Men foydalanish shartlariga roziman",
    deleteCredentialTitle: "{0} ni o'chirish",
    deleteCredentialMessage: "{0} ni o'charmoqchimisiz?",
    recaptchaFailed: "Noto'g'ri Recaptcha",
    recaptchaNotConfigured: "Recaptcha talab qilinadi, lekin sozlanmagan",
    consentDenied: "Rozilik rad etildi.",
    noAccount: "Ro’yxatdan o’tmaganmisiz?",
    username: "Foydalanuvchi nomi",
    usernameOrEmail: "Login@kompaniya",
    firstName: "Ism",
    givenName: "Berilgan ism",
    fullName: "To'liq ism",
    lastName: "Familiya",
    familyName: "Oila nomi",
    email: "Elektron pochta",
    password: "Parol",
    passwordConfirm: "Parolni tasdiqlash",
    passwordNew: "Yangi parol",
    passwordNewConfirm: "Yangi parolni tasdiqlash",
    hidePassword: "Parolni yashirish",
    showPassword: "Parolni ko'rsatish",
    rememberMe: "Meni eslab qolish",
    authenticatorCode: "Bir martalik kod",
    address: "Manzil",
    street: "Ko'cha",
    locality: "Shahar yoki mahalla",
    region: "Viloyat yoki hudud",
    postal_code: "Pochta indeksi",
    country: "Davlat",
    emailVerified: "Elektron pochta tasdiqlangan",
    website: "Veb-sayt",
    phoneNumber: "Telefon raqami",
    phoneNumberVerified: "Telefon raqami tasdiqlangan",
    gender: "Jins",
    birthday: "Tug'ilgan kun",
    zoneinfo: "Vaqt mintaqasi",
    gssDelegationCredential: "GSS delegatsiya kredensiali",
    logoutOtherSessions: "Boshqa qurilmalardan chiqish",
    profileScopeConsentText: "Foydalanuvchi profili",
    emailScopeConsentText: "Elektron pochta manzili",
    addressScopeConsentText: "Manzil",
    phoneScopeConsentText: "Telefon raqami",
    offlineAccessScopeConsentText: "Oflayn kirish",
    samlRoleListScopeConsentText: "Mening rollarim",
    rolesScopeConsentText: "Foydalanuvchi rollari",
    organizationScopeConsentText: "Tashkilot",
    restartLoginTooltip: "Kirishni qayta boshlash",
    loginTotpIntro: "Ushbu hisobga kirish uchun bir martalik parol generatori sozlashingiz kerak",
    loginTotpStep1: "Quyidagi ilovalardan birini mobil qurilmangizga o'rnating:",
    loginTotpStep2: "Ilovani oching va shtrix-kodni skanerlang:",
    loginTotpStep3: "Ilova tomonidan taqdim etilgan bir martalik kodni kiriting va sozlashni yakunlash uchun Yuborish-ni bosing.",
    loginTotpStep3DeviceName: "OTP qurilmalaringizni boshqarishga yordam berish uchun Qurilma nomini kiriting.",
    loginTotpManualStep2: "Ilovani oching va kalitni kiriting:",
    loginTotpManualStep3: "Agar ilova ularga ruxsat bersa, quyidagi konfiguratsiya qiymatlaridan foydalaning:",
    loginTotpUnableToScan: "Skanerlay olmadingizmi?",
    loginTotpScanBarcode: "Shtrix-kodni skanerlash?",
    loginCredential: "Kredensial",
    loginOtpOneTime: "Bir martalik kod",
    loginTotpType: "Turi",
    loginTotpAlgorithm: "Algoritm",
    loginTotpDigits: "Raqamlar",
    loginTotpInterval: "Interval",
    loginTotpCounter: "Hisoblagich",
    loginTotpDeviceName: "Qurilma nomi",
    "loginTotp.totp": "Vaqtga asoslangan",
    "loginTotp.hotp": "Hisoblagichga asoslangan",
    totpAppFreeOTPName: "FreeOTP",
    totpAppGoogleName: "Google Authenticator",
    totpAppMicrosoftAuthenticatorName: "Microsoft Authenticator",
    loginChooseAuthenticator: "Kirish usulini tanlang",
    oauthGrantRequest: "Ushbu kirish imtiyozlarini berasizmi?",
    inResource: "ichida",
    oauth2DeviceVerificationTitle: "Qurilma kirishi",
    verifyOAuth2DeviceUserCode: "Qurilmangiz tomonidan taqdim etilgan kodni kiriting va Yuborish-ni bosing",
    oauth2DeviceInvalidUserCodeMessage: "Noto'g'ri kod, iltimos qayta urinib ko'ring.",
    oauth2DeviceExpiredUserCodeMessage: "Kodning amal qilish muddati tugadi. Iltimos, qurilmangizga qaytib, qayta ulanishni sinab ko'ring.",
    oauth2DeviceVerificationCompleteHeader: "Qurilma kirishi muvaffaqiyatli",
    oauth2DeviceVerificationCompleteMessage: "Ushbu brauzer oynasini yopishingiz va qurilmangizga qaytishingiz mumkin.",
    oauth2DeviceVerificationFailedHeader: "Qurilma kirishi muvaffaqiyatsiz",
    oauth2DeviceVerificationFailedMessage: "Ushbu brauzer oynasini yopishingiz va qurilmangizga qaytib, qayta kirishni sinab ko'rishingiz mumkin.",
    oauth2DeviceConsentDeniedMessage: "Qurilmani ulash uchun rozilik rad etildi.",
    oauth2DeviceAuthorizationGrantDisabledMessage: "Mijoz OAuth 2.0 qurilma avtorizatsiya grantini boshlashga ruxsat berilmagan. Ushbu mijoz uchun jarayon o'chirilgan.",
    emailVerifyInstruction1: "Elektron pochta manzilingizni tasdiqlash bo'yicha ko'rsatmalar bilan elektron pochta {0} manziliga yuborildi.",
    emailVerifyInstruction2: "Elektron pochtangizda tasdiqlash kodini olmadingizmi?",
    emailVerifyInstruction3: "elektron pochtani qayta yuborish uchun.",
    emailLinkIdpTitle: "{0} ni ulash",
    emailLinkIdp1: "{0} hisobingizni {1} bilan {2} hisobingizga ulash bo'yicha ko'rsatmalar bilan elektron pochta sizga yuborildi.",
    emailLinkIdp2: "Elektron pochtangizda tasdiqlash kodini olmadingizmi?",
    emailLinkIdp3: "elektron pochtani qayta yuborish uchun.",
    emailLinkIdp4: "Agar siz boshqa brauzerda elektron pochtani allaqachon tasdiqlagan bo'lsangiz",
    emailLinkIdp5: "davom etish uchun.",
    backToLogin: "« Kirishga qaytish",
    emailInstruction: "Foydalanuvchi nomingiz yoki elektron pochta manzilingizni kiriting, biz sizga yangi parol yaratish bo'yicha ko'rsatmalar yuboramiz.",
    emailInstructionUsername: "Foydalanuvchi nomingizni kiriting, biz sizga yangi parol yaratish bo'yicha ko'rsatmalar yuboramiz.",
    copyCodeInstruction: "Iltimos, ushbu kodni nusxa oling va ilovangizga joylashtiring:",
    pageExpiredTitle: "Sahifa muddati tugadi",
    pageExpiredMsg1: "Kirish jarayonini qayta boshlash uchun",
    pageExpiredMsg2: "Kirish jarayonini davom ettirish uchun",
    personalInfo: "Shaxsiy ma'lumotlar:",
    role_admin: "Admin",
    "role_realm-admin": "Realm administratori",
    "role_create-realm": "Realm yaratish",
    "role_create-client": "Mijoz yaratish",
    "role_view-realm": "Realmni ko'rish",
    "role_view-users": "Foydalanuvchilarni ko'rish",
    "role_view-applications": "Ilovalarni ko'rish",
    "role_view-clients": "Mijozlarni ko'rish",
    "role_view-events": "Voqealarni ko'rish",
    "role_view-identity-providers": "Identifikatsiya provayderlarini ko'rish",
    "role_manage-realm": "Realmni boshqarish",
    "role_manage-users": "Foydalanuvchilarni boshqarish",
    "role_manage-applications": "Ilovalarni boshqarish",
    "role_manage-identity-providers": "Identifikatsiya provayderlarini boshqarish",
    "role_manage-clients": "Mijozlarni boshqarish",
    "role_manage-events": "Voqealarni boshqarish",
    "role_view-profile": "Profilni ko'rish",
    "role_manage-account": "Hisobni boshqarish",
    "role_manage-account-links": "Hisob ulanishlarini boshqarish",
    "role_read-token": "Tokenni o'qish",
    "role_offline-access": "Oflayn kirish",
    client_account: "Hisob",
    "client_account-console": "Hisob konsoli",
    "client_security-admin-console": "Xavfsizlik admin konsoli",
    "client_admin-cli": "Admin CLI",
    "client_realm-management": "Realm boshqaruvi",
    client_broker: "Broker",
    requiredFields: "Majburiy maydonlar",
    invalidUserMessage: "Noto'g'ri foydalanuvchi nomi yoki parol.",
    invalidUsernameMessage: "Noto'g'ri foydalanuvchi nomi.",
    invalidUsernameOrEmailMessage: "Noto'g'ri foydalanuvchi nomi yoki elektron pochta.",
    invalidPasswordMessage: "Noto'g'ri parol.",
    invalidEmailMessage: "Noto'g'ri elektron pochta manzili.",
    accountDisabledMessage: "Hisob o'chirilgan, administratoringiz bilan bog'laning.",
    accountTemporarilyDisabledMessage: "Hisob vaqtincha o'chirilgan; administratoringiz bilan bog'laning yoki keyinroq qayta urinib ko'ring.",
    expiredCodeMessage: "Kirish vaqti tugadi. Iltimos, qayta kiring.",
    expiredActionMessage: "Amal muddati tugadi. Iltimos, hozir kirish bilan davom eting.",
    expiredActionTokenNoSessionMessage: "Amal muddati tugadi.",
    expiredActionTokenSessionExistsMessage: "Amal muddati tugadi. Iltimos, qaytadan boshlang.",
    sessionLimitExceeded: "Sessiyalar soni juda ko'p",
    identityProviderLogoutFailure: "SAML IdP chiqish muvaffaqiyatsiz",
    missingFirstNameMessage: "Iltimos, ismingizni kiriting.",
    missingLastNameMessage: "Iltimos, familiyangizni kiriting.",
    missingEmailMessage: "Iltimos, elektron pochtangizni kiriting.",
    missingUsernameMessage: "Iltimos, foydalanuvchi nomingizni kiriting.",
    missingPasswordMessage: "Iltimos, parolingizni kiriting.",
    missingTotpMessage: "Iltimos, autentifikator kodini kiriting.",
    missingTotpDeviceNameMessage: "Iltimos, qurilma nomini kiriting.",
    notMatchPasswordMessage: "Parollar mos kelmaydi.",
    "error-invalid-value": "Noto'g'ri qiymat.",
    "error-invalid-blank": "Iltimos, qiymatni kiriting.",
    "error-empty": "Iltimos, qiymatni kiriting.",
    "error-invalid-length": "Uzunlik {1} va {2} oralig'ida bo'lishi kerak.",
    "error-invalid-length-too-short": "Minimal uzunlik {1}.",
    "error-invalid-length-too-long": "Maksimal uzunlik {2}.",
    "error-invalid-email": "Noto'g'ri elektron pochta manzili.",
    "error-invalid-number": "Noto'g'ri raqam.",
    "error-number-out-of-range": "Raqam {1} va {2} oralig'ida bo'lishi kerak.",
    "error-number-out-of-range-too-small": "Raqamning minimal qiymati {1} bo'lishi kerak.",
    "error-number-out-of-range-too-big": "Raqamning maksimal qiymati {2} bo'lishi kerak.",
    "error-pattern-no-match": "Noto'g'ri qiymat.",
    "error-invalid-uri": "Noto'g'ri URL.",
    "error-invalid-uri-scheme": "Noto'g'ri URL sxemasi.",
    "error-invalid-uri-fragment": "Noto'g'ri URL fragmenti.",
    "error-user-attribute-required": "Iltimos, ushbu maydonni kiriting.",
    "error-invalid-date": "Noto'g'ri sana.",
    "error-user-attribute-read-only": "Bu maydon faqat o'qish uchun.",
    "error-username-invalid-character": "Qiymatda noto'g'ri belgi mavjud.",
    "error-person-name-invalid-character": "Qiymatda noto'g'ri belgi mavjud.",
    "error-reset-otp-missing-id": "Iltimos, OTP konfiguratsiyasini tanlang.",
    invalidPasswordExistingMessage: "Noto'g'ri mavjud parol.",
    invalidPasswordBlacklistedMessage: "Noto'g'ri parol: parol qora ro'yxatda.",
    invalidPasswordConfirmMessage: "Parol tasdiqlash mos kelmaydi.",
    invalidTotpMessage: "Noto'g'ri autentifikator kodi.",
    usernameExistsMessage: "Foydalanuvchi nomi allaqachon mavjud.",
    emailExistsMessage: "Elektron pochta allaqachon mavjud.",
    federatedIdentityExistsMessage: "{0} {1} bilan foydalanuvchi allaqachon mavjud. Hisobni ulash uchun hisob boshqaruviga kiring.",
    federatedIdentityUnavailableMessage: "{1} identifikatsiya provayderi bilan autentifikatsiya qilingan {0} foydalanuvchisi mavjud emas. Administratoringiz bilan bog'laning.",
    federatedIdentityUnmatchedEssentialClaimMessage: "Identifikatsiya provayderi tomonidan chiqarilgan ID tokeni sozlangan muhim da'vo bilan mos kelmaydi. Administratoringiz bilan bog'laning.",
    confirmLinkIdpTitle: "Hisob allaqachon mavjud",
    confirmOverrideIdpTitle: "Broker ulanishi allaqachon mavjud",
    federatedIdentityConfirmLinkMessage: "{0} {1} bilan foydalanuvchi allaqachon mavjud. Qanday davom etmoqchisiz?",
    federatedIdentityConfirmOverrideMessage: "Siz {0} hisobingizni {1} hisobi {2} bilan ulamoqchisiz. Ammo hisobingiz allaqachon boshqa {3} hisobi {4} bilan bog'langan. Mavjud ulanishni yangi hisob bilan almashtirishni tasdiqlaysizmi?",
    federatedIdentityConfirmReauthenticateMessage: "Hisobingizni {0} bilan ulash uchun autentifikatsiya qiling",
    nestedFirstBrokerFlowMessage: "{0} foydalanuvchisi {1} hech qanday ma'lum foydalanuvchi bilan bog'lanmagan.",
    confirmLinkIdpReviewProfile: "Profilni ko'rib chiqish",
    confirmLinkIdpContinue: "Mavjud hisobga qo'shish",
    confirmOverrideIdpContinue: "Ha, joriy hisob bilan ulanishni almashtirish",
    configureTotpMessage: "Hisobingizni faollashtirish uchun Mobil autentifikatorni sozlashingiz kerak.",
    configureBackupCodesMessage: "Hisobingizni faollashtirish uchun zaxira kodlarni sozlashingiz kerak.",
    updateProfileMessage: "Hisobingizni faollashtirish uchun foydalanuvchi profilingizni yangilashingiz kerak.",
    updatePasswordMessage: "Hisobingizni faollashtirish uchun parolingizni o'zgartirishingiz kerak.",
    updateEmailMessage: "Hisobingizni faollashtirish uchun elektron pochta manzilingizni yangilashingiz kerak.",
    resetPasswordMessage: "Parolingizni o'zgartirishingiz kerak.",
    verifyEmailMessage: "Hisobingizni faollashtirish uchun elektron pochta manzilingizni tasdiqlashingiz kerak.",
    linkIdpMessage: "Hisobingizni {0} bilan ulash uchun elektron pochta manzilingizni tasdiqlashingiz kerak.",
    emailSentMessage: "Tez orada qo'shimcha ko'rsatmalar bilan elektron pochta olasiz.",
    emailSendErrorMessage: "Elektron pochta yuborish muvaffaqiyatsiz bo'ldi, iltimos qayta urinib ko'ring.",
    accountUpdatedMessage: "Hisobingiz yangilandi.",
    accountPasswordUpdatedMessage: "Parolingiz yangilandi.",
    delegationCompleteHeader: "Kirish muvaffaqiyatli",
    delegationCompleteMessage: "Ushbu brauzer oynasini yopishingiz va konsol ilovangizga qaytishingiz mumkin.",
    delegationFailedHeader: "Kirish muvaffaqiyatsiz",
    delegationFailedMessage: "Ushbu brauzer oynasini yopishingiz va konsol ilovangizga qaytib, qayta kirishni sinab ko'rishingiz mumkin.",
    noAccessMessage: "Kirish ruxsati yo'q",
    invalidPasswordMinLengthMessage: "Noto'g'ri parol: minimal uzunlik {0}.",
    invalidPasswordMaxLengthMessage: "Noto'g'ri parol: maksimal uzunlik {0}.",
    invalidPasswordMinDigitsMessage: "Noto'g'ri parol: kamida {0} raqamli belgilar bo'lishi kerak.",
    invalidPasswordMinLowerCaseCharsMessage: "Noto'g'ri parol: kamida {0} kichik harfli belgilar bo'lishi kerak.",
    invalidPasswordMinUpperCaseCharsMessage: "Noto'g'ri parol: kamida {0} katta harfli belgilar bo'lishi kerak.",
    invalidPasswordMinSpecialCharsMessage: "Noto'g'ri parol: kamida {0} maxsus belgilar bo'lishi kerak.",
    invalidPasswordNotUsernameMessage: "Noto'g'ri parol: foydalanuvchi nomiga teng bo'lmasligi kerak.",
    invalidPasswordNotContainsUsernameMessage: "Noto'g'ri parol: foydalanuvchi nomini o'z ichiga olmasligi kerak.",
    invalidPasswordNotEmailMessage: "Noto'g'ri parol: elektron pochtaga teng bo'lmasligi kerak.",
    invalidPasswordRegexPatternMessage: "Noto'g'ri parol: regex naqsh(lar)iga mos kelmaydi.",
    invalidPasswordHistoryMessage: "Noto'g'ri parol: oxirgi {0} parolga teng bo'lmasligi kerak.",
    invalidPasswordGenericMessage: "Noto'g'ri parol: yangi parol parol siyosatlariga mos kelmaydi.",
    failedToProcessResponseMessage: "Javobni qayta ishlash muvaffaqiyatsiz bo'ldi",
    httpsRequiredMessage: "HTTPS talab qilinadi",
    realmNotEnabledMessage: "Realm faol emas",
    invalidRequestMessage: "Noto'g'ri so'rov",
    successLogout: "Siz tizimdan chiqdingiz",
    failedLogout: "Chiqish muvaffaqiyatsiz bo'ldi",
    unknownLoginRequesterMessage: "Noma'lum kirish so'rovchisi",
    loginRequesterNotEnabledMessage: "Kirish so'rovchisi faol emas",
    bearerOnlyMessage: "Faqat bearer ilovalar brauzer kirishini boshlashi mumkin emas",
    standardFlowDisabledMessage: "Mijozga berilgan response_type bilan brauzer kirishini boshlashga ruxsat berilmagan. Mijoz uchun standart jarayon o'chirilgan.",
    implicitFlowDisabledMessage: "Mijozga berilgan response_type bilan brauzer kirishini boshlashga ruxsat berilmagan. Implicit jarayon mijoz uchun o'chirilgan.",
    invalidRedirectUriMessage: "Noto'g'ri qayta yo'naltirish URI",
    unsupportedNameIdFormatMessage: "Qo'llab-quvvatlanmaydigan NameIDFormat",
    invalidRequesterMessage: "Noto'g'ri so'rovchi",
    registrationNotAllowedMessage: "Ro'yxatdan o'tishga ruxsat berilmagan",
    resetCredentialNotAllowedMessage: "Kredensialni qayta tiklashga ruxsat berilmagan",
    permissionNotApprovedMessage: "Ruxsat tasdiqlanmagan.",
    noRelayStateInResponseMessage: "Identifikatsiya provayderidan javobda relay holati yo'q.",
    insufficientPermissionMessage: "Identifikatsiyalarni ulash uchun yetarli ruxsatlar yo'q.",
    couldNotProceedWithAuthenticationRequestMessage: "Identifikatsiya provayderiga autentifikatsiya so'rovini davom ettirib bo'lmadi.",
    couldNotObtainTokenMessage: "Identifikatsiya provayderidan token olinmadi.",
    unexpectedErrorRetrievingTokenMessage: "Identifikatsiya provayderidan token olishda kutilmagan xato.",
    unexpectedErrorHandlingResponseMessage: "Identifikatsiya provayderidan javobni qayta ishlashda kutilmagan xato.",
    identityProviderAuthenticationFailedMessage: "Autentifikatsiya muvaffaqiyatsiz. Identifikatsiya provayderi bilan autentifikatsiya qilib bo'lmadi.",
    couldNotSendAuthenticationRequestMessage: "Identifikatsiya provayderiga autentifikatsiya so'rovini yuborib bo'lmadi.",
    unexpectedErrorHandlingRequestMessage: "Autentifikatsiya so'rovini qayta ishlashda kutilmagan xato.",
    invalidAccessCodeMessage: "Noto'g'ri kirish kodi.",
    sessionNotActiveMessage: "Sessiya faol emas.",
    invalidCodeMessage: "Xato yuz berdi, iltimos ilovangiz orqali qayta kiring.",
    cookieNotFoundMessage: "Cookie topilmadi. Iltimos, brauzeringizda cookielarni yoqishga ishonch hosil qiling.",
    insufficientLevelOfAuthentication: "So'ralgan autentifikatsiya darajasi qondirilmadi.",
    identityProviderUnexpectedErrorMessage: "Identifikatsiya provayderi bilan autentifikatsiya qilishda kutilmagan xato.",
    identityProviderMissingStateMessage: "Identifikatsiya provayderidan javobda holat parametri yo'q.",
    identityProviderMissingCodeOrErrorMessage: "Identifikatsiya provayderidan javobda kod yoki xato parametri yo'q.",
    identityProviderInvalidResponseMessage: "Identifikatsiya provayderidan noto'g'ri javob.",
    identityProviderInvalidSignatureMessage: "Identifikatsiya provayderidan javobda noto'g'ri imzo.",
    identityProviderNotFoundMessage: "Identifikator bilan identifikatsiya provayderi topilmadi.",
    identityProviderLinkSuccess: "Siz elektron pochtangizni muvaffaqiyatli tasdiqladingiz. Iltimos, asl brauzeringizga qaytib, u yerdan kirishni davom ettiring.",
    staleCodeMessage: "Bu sahifa endi amal qilmaydi, iltimos ilovangizga qaytib, qayta kiring",
    realmSupportsNoCredentialsMessage: "Realm hech qanday kredensial turini qo'llab-quvvatlamaydi.",
    credentialSetupRequired: "Kirish mumkin emas, kredensial sozlamasi talab qilinadi.",
    identityProviderNotUniqueMessage: "Realm bir nechta identifikatsiya provayderlarini qo'llab-quvvatlaydi. Qaysi identifikatsiya provayderidan foydalanish kerakligini aniqlab bo'lmadi.",
    emailVerifiedMessage: "Elektron pochta manzilingiz tasdiqlandi.",
    emailVerifiedAlreadyMessage: "Elektron pochta manzilingiz allaqachon tasdiqlangan.",
    staleEmailVerificationLink: "Siz bosgan havola eski va endi amal qilmaydi. Balki siz allaqachon elektron pochtangizni tasdiqlagansiz.",
    identityProviderAlreadyLinkedMessage: "{0} tomonidan qaytarilgan federatsiya identifikatori allaqachon boshqa foydalanuvchi bilan bog'langan.",
    confirmAccountLinking: "{1} identifikatsiya provayderining {0} hisobini hisobingiz bilan ulashni tasdiqlang.",
    confirmEmailAddressVerification: "{0} elektron pochta manzilining haqiqiyligini tasdiqlang.",
    confirmExecutionOfActions: "Quyidagi amal(larni) bajarish",
    backToApplication: "« Ilovaga qaytish",
    missingParameterMessage: "Parametrlar yetishmayapti: {0}",
    clientNotFoundMessage: "Mijoz topilmadi.",
    clientDisabledMessage: "Mijoz o'chirilgan.",
    invalidParameterMessage: "Noto'g'ri parametr: {0}",
    alreadyLoggedIn: "Siz allaqachon kirdingiz.",
    differentUserAuthenticated: "Siz ushbu sessiyada boshqa foydalanuvchi sifatida ''{0}'' sifatida autentifikatsiya qilingansiz. Iltimos, avval chiqing.",
    brokerLinkingSessionExpired: "Broker hisobini ulash so'raldi, lekin joriy sessiya endi amal qilmaydi.",
    proceedWithAction: "» Davom etish uchun bu yerga bosing",
    acrNotFulfilled: "Autentifikatsiya talablari bajarilmadi",
    "requiredAction.CONFIGURE_TOTP": "OTP sozlash",
    "requiredAction.TERMS_AND_CONDITIONS": "Foydalanish shartlari va shartlari",
    "requiredAction.UPDATE_PASSWORD": "Parolni yangilash",
    "requiredAction.UPDATE_PROFILE": "Profilni yangilash",
    "requiredAction.VERIFY_EMAIL": "Elektron pochtani tasdiqlash",
    "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": "Qayta tiklash kodlarini yaratish",
    "requiredAction.webauthn-register-passwordless": "Webauthn parolsiz ro'yxatdan o'tish",
    invalidTokenRequiredActions: "Havolada kiritilgan talab qilinadigan amallar noto'g'ri",
    doX509Login: "Siz quyidagi sifatida kirasiz:",
    clientCertificate: "X509 mijoz sertifikati:",
    noCertificate: "[Sertifikat yo'q]",
    pageNotFound: "Sahifa topilmadi",
    internalServerError: "Ichki server xatosi yuz berdi",
    "console-username": "Foydalanuvchi nomi:",
    "console-password": "Parol:",
    "console-otp": "Bir martalik parol:",
    "console-new-password": "Yangi parol:",
    "console-confirm-password": "Parolni tasdiqlash:",
    "console-update-password": "Parolingizni yangilash talab qilinadi.",
    "console-verify-email": "Elektron pochta manzilingizni tasdiqlashingiz kerak. Biz {0} ga tasdiqlash kodi bilan elektron pochta yubordik. Iltimos, ushbu kodni quyidagi kiritish maydoniga kiriting.",
    "console-email-code": "Elektron pochta kodi:",
    "console-accept-terms": "Shartlarni qabul qilasizmi? [h/y]:",
    "console-accept": "h",
    "openshift.scope.user_info": "Foydalanuvchi ma'lumotlari",
    "openshift.scope.user_check-access": "Foydalanuvchi kirish ma'lumotlari",
    "openshift.scope.user_full": "To'liq kirish",
    "openshift.scope.list-projects": "Loyihalarni ro'yxatlash",
    "saml.post-form.title": "Autentifikatsiya qayta yo'naltirish",
    "saml.post-form.message": "Qayta yo'naltirilmoqda, iltimos kuting.",
    "saml.post-form.js-disabled": "JavaScript o'chirilgan. Uni yoqishni qat'iy tavsiya qilamiz. Davom etish uchun quyidagi tugmani bosing.",
    "saml.artifactResolutionServiceInvalidResponse": "Artefaktni hal qilib bo'lmadi.",
    "otp-display-name": "Autentifikator ilovasi",
    "otp-help-text": "Autentifikator ilovasidan tasdiqlash kodini kiriting.",
    "otp-reset-description": "Qaysi OTP konfiguratsiyasini olib tashlash kerak?",
    "password-display-name": "Parol",
    "password-help-text": "Parolingizni kiritib kiring.",
    "auth-username-form-display-name": "Foydalanuvchi nomi",
    "auth-username-form-help-text": "Foydalanuvchi nomingizni kiritib kirishni boshlang",
    "auth-username-password-form-display-name": "Foydalanuvchi nomi va parol",
    "auth-username-password-form-help-text": "Foydalanuvchi nomingiz va parolingizni kiritib kiring.",
    "auth-x509-client-username-form-display-name": "X509 sertifikati",
    "auth-x509-client-username-form-help-text": "X509 mijoz sertifikati bilan kiring.",
    "auth-recovery-authn-code-form-display-name": "Qayta tiklash autentifikatsiya kodi",
    "auth-recovery-authn-code-form-help-text": "Avvaldan yaratilgan ro'yxatdan qayta tiklash autentifikatsiya kodini kiriting.",
    "auth-recovery-code-info-message": "Belgilangan qayta tiklash kodini kiriting.",
    "auth-recovery-code-prompt": "Qayta tiklash kodi #{0}",
    "auth-recovery-code-header": "Qayta tiklash autentifikatsiya kodi bilan kirish",
    "recovery-codes-error-invalid": "Noto'g'ri qayta tiklash autentifikatsiya kodi",
    "recovery-code-config-header": "Qayta tiklash autentifikatsiya kodlari",
    "recovery-code-config-warning-title": "Ushbu qayta tiklash kodlari ushbu sahifadan chiqqandan keyin qayta ko'rinmaydi",
    "recovery-code-config-warning-message": "Ularni chop etish, yuklab olish yoki parol menejeriga nusxalash va xavfsiz saqlashga ishonch hosil qiling. Ushbu sozlamani bekor qilish ushbu qayta tiklash kodlarini hisobingizdan olib tashlaydi.",
    "recovery-codes-print": "Chop etish",
    "recovery-codes-download": "Yuklab olish",
    "recovery-codes-copy": "Nusxa olish",
    "recovery-codes-copied": "Nusxa olindi",
    "recovery-codes-confirmation-message": "Men bu kodlarni xavfsiz joyga saqladim",
    "recovery-codes-action-complete": "Sozlashni yakunlash",
    "recovery-codes-action-cancel": "Sozlashni bekor qilish",
    "recovery-codes-download-file-header": "Ushbu qayta tiklash kodlarini xavfsiz joyda saqlang.",
    "recovery-codes-download-file-description": "Qayta tiklash kodlari autentifikatoringizga kirish imkoningiz bo'lmaganida hisobingizga kirishga imkon beruvchi bir martalik parollardir.",
    "recovery-codes-download-file-date": "Ushbu kodlar quyidagi sanada yaratildi",
    "recovery-codes-label-default": "Qayta tiklash kodlari",
    "webauthn-display-name": "Passkey",
    "webauthn-help-text": "Kirish uchun Passkey-dan foydalaning.",
    "webauthn-passwordless-display-name": "Passkey",
    "webauthn-passwordless-help-text": "Parolsiz kirish uchun Passkey-dan foydalaning.",
    "webauthn-login-title": "Passkey bilan kirish",
    "webauthn-registration-title": "Passkey ro'yxatdan o'tkazish",
    "webauthn-available-authenticators": "Mavjud Passkey-lar",
    "webauthn-unsupported-browser-text": "WebAuthn ushbu brauzer tomonidan qo'llab-quvvatlanmaydi. Boshqasini sinab ko'ring yoki administratoringiz bilan bog'laning.",
    "webauthn-doAuthenticate": "Passkey bilan kirish",
    "webauthn-createdAt-label": "Yaratilgan",
    "webauthn-registration-init-label": "Passkey (Standart yorliq)",
    "webauthn-registration-init-label-prompt": "Iltimos, ro'yxatdan o'tgan passkey yorlig'ingizni kiriting",
    "webauthn-error-title": "Passkey xatosi",
    "webauthn-error-registration": "Passkey-ni ro'yxatdan o'tkazib bo'lmadi.<br/> {0}",
    "webauthn-error-api-get": "Passkey bilan autentifikatsiya qilib bo'lmadi.<br/> {0}",
    "webauthn-error-different-user": "Birinchi autentifikatsiya qilingan foydalanuvchi Passkey tomonidan autentifikatsiya qilingan foydalanuvchi emas.",
    "webauthn-error-auth-verification": "Passkey autentifikatsiya natijasi noto'g'ri.<br/> {0}",
    "webauthn-error-register-verification": "Passkey ro'yxatdan o'tish natijasi noto'g'ri.<br/> {0}",
    "webauthn-error-user-not-found": "Passkey tomonidan autentifikatsiya qilingan noma'lum foydalanuvchi.",
    "passkey-login-title": "Passkey bilan kirish",
    "passkey-available-authenticators": "Mavjud Passkey-lar",
    "passkey-unsupported-browser-text": "Passkey ushbu brauzer tomonidan qo'llab-quvvatlanmaydi. Boshqasini sinab ko'ring yoki administratoringiz bilan bog'laning.",
    "passkey-doAuthenticate": "Passkey bilan kirish",
    "passkey-createdAt-label": "Yaratilgan",
    "passkey-autofill-select": "Passkey-ni tanlang",
    "identity-provider-redirector": "Boshqa identifikatsiya provayderi bilan ulanish",
    "identity-provider-login-label": "Yoki bilan kiring",
    "idp-email-verification-display-name": "Elektron pochta tasdiqlash",
    "idp-email-verification-help-text": "Elektron pochtangizni tasdiqlab hisobingizni ulang.",
    "idp-username-password-form-display-name": "Foydalanuvchi nomi va parol",
    "idp-username-password-form-help-text": "Kirish orqali hisobingizni ulang.",
    finalDeletionConfirmation: "Agar hisobingizni o'chirsangiz, uni qayta tiklab bo'lmaydi. Hisobingizni saqlab qolish uchun Bekor qilish-ni bosing.",
    irreversibleAction: "Bu amal qaytarib bo'lmaydi",
    deleteAccountConfirm: "Hisobni o'chirish tasdiqlash",
    deletingImplies: "Hisobingizni o'chirish quyidagilarni o'z ichiga oladi:",
    errasingData: "Barcha ma'lumotlaringizni o'chirish",
    loggingOutImmediately: "Sizni darhol chiqarish",
    accountUnusable: "Ushbu hisob bilan ilovadan keyingi foydalanish mumkin bo'lmaydi",
    userDeletedSuccessfully: "Foydalanuvchi muvaffaqiyatli o'chirildi",
    "access-denied": "Kirish rad etildi",
    "access-denied-when-idp-auth": "{0} bilan autentifikatsiya qilishda kirish rad etildi",
    "frontchannel-logout.title": "Chiqish",
    "frontchannel-logout.message": "Siz quyidagi ilovalardan chiqyapsiz",
    logoutConfirmTitle: "Chiqish",
    logoutConfirmHeader: "Chiqmoqchimisiz?",
    doLogout: "Chiqish",
    readOnlyUsernameMessage: "Foydalanuvchi nomingizni yangilay olmaysiz, chunki u faqat o'qish uchun.",
    "error-invalid-multivalued-size": "{0} atributida kamida {1} va ko'pi bilan {2} qiymat bo'lishi kerak.",
    "organization.confirm-membership.title": "Siz ${kc.org.name} tashkilotiga qo'shilmoqchisiz",
    "organization.confirm-membership": "Quyidagi havolani bosish orqali siz {0} tashkilotining a'zosi bo'lasiz:",
    "organization.member.register.title": "${kc.org.name} tashkilotiga qo'shilish uchun hisob yarating",
    shouldBeEqual: "{0} {1} ga teng bo'lishi kerak",
    shouldBeDifferent: "{0} {1} dan farqli bo'lishi kerak",
    shouldMatchPattern: "Naqshga mos kelishi kerak: `/{0}/`",
    mustBeAnInteger: "Butun son bo'lishi kerak",
    notAValidOption: "To'g'ri variant emas",
    selectAnOption: "Variantni tanlang",
    remove: "Olib tashlash",
    addValue: "Qiymat qo'shish",
    languages: "Tillar"
};

export default messages;