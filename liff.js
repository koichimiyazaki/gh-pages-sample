{\rtf1\ansi\ansicpg932\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset128 HiraginoSans-W3;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 $(document).ready(function () \{\
    // liffId: LIFF URL "https://liff.line.me/xxx"
\f1 \'82\'cc
\f0 xxx
\f1 \'82\'c9\'8a\'59\'93\'96\'82\'b7\'82\'e9\'89\'d3\'8f\'8a
\f0 \
    // LINE Developers
\f1 \'82\'cc
\f0 LIFF
\f1 \'89\'e6\'96\'ca\'82\'e6\'82\'e8\'8a\'6d\'94\'46\'89\'c2\'94\'5c
\f0 \
    var liffId = "1654150367-Agq5Vdp1";\
    initializeLiff(liffId);\
\})\
\
function initializeLiff(liffId) \{\
    liff\
        .init(\{\
            liffId: liffId\
        \})\
        .then(() => \{\
            // Web
\f1 \'83\'75\'83\'89\'83\'45\'83\'55\'82\'a9\'82\'e7\'83\'41\'83\'4e\'83\'5a\'83\'58\'82\'b3\'82\'ea\'82\'bd\'8f\'ea\'8d\'87\'82\'cd\'81\'41
\f0 LINE
\f1 \'82\'c9\'83\'8d\'83\'4f\'83\'43\'83\'93\'82\'b7\'82\'e9
\f0 \
            if (!liff.isInClient() && !liff.isLoggedIn()) \{\
                window.alert("LINE
\f1 \'83\'41\'83\'4a\'83\'45\'83\'93\'83\'67\'82\'c9\'83\'8d\'83\'4f\'83\'43\'83\'93\'82\'b5\'82\'c4\'82\'ad\'82\'be\'82\'b3\'82\'a2\'81\'42
\f0 ");\
                liff.login(\{redirectUri: location.href\});\
            \}\
        \})\
        .catch((err) => \{\
            console.log('LIFF Initialization failed ', err);\
        \});\
\}\
\
function sendText(text) \{\
    if (!liff.isInClient()) \{\
        shareTargetPicker(text);\
    \} else \{\
        sendMessages(text);\
    \}\
\}\
\
// LINE
\f1 \'83\'67\'81\'5b\'83\'4e\'89\'e6\'96\'ca\'8f\'e3\'82\'c5\'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57\'91\'97\'90\'4d
\f0 \
function sendMessages(text) \{\
    liff.sendMessages([\{\
        'type': 'text',\
        'text': text\
    \}]).then(function () \{\
        liff.closeWindow();\
    \}).catch(function (error) \{\
        window.alert('Failed to send message ' + error);\
    \});\
\}\
\
// Web
\f1 \'83\'75\'83\'89\'83\'45\'83\'55\'82\'a9\'82\'e7\'83\'81\'83\'62\'83\'5a\'81\'5b\'83\'57\'91\'97\'90\'4d
\f0 \
function shareTargetPicker(text) \{\
    liff.shareTargetPicker([\{\
        'type': 'text',\
        'text': text\
    \}]).catch(function (error) \{\
        window.alert('Failed to send message ' + error);\
    \});\
\}}