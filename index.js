{\rtf1\ansi\ansicpg932\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset128 HiraginoSans-W3;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 $(function () \{\
    // 
\f1 \'83\'4a\'83\'8c\'83\'93\'83\'5f\'81\'5b
\f0 \
    $(function () \{\
        $('input[name="date"]').datepicker(\{\
            dateFormat: 'yy/mm/dd',\
        \});\
    \});\
\
    // 
\f1 \'8e\'51\'89\'c1\'90\'6c\'90\'94\'95\'aa\'82\'cc\'8e\'81\'96\'bc\'97\'93\'82\'f0\'90\'b6\'90\'ac
\f0 \
    $('#form-number').click(function () \{\
        $('#form-name').empty();\
        var num = $('input[name="number"]:checked').val();\
        for (i = 0; i < num; i++) \{\
            $('#form-name').append(\
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`\
            );\
        \}\
    \});\
\
    // 
\f1 \'91\'97\'90\'4d
\f0 \
    $('form').submit(function () \{\
        var date = $('input[name="date"]').val();\
        var number = $('input[name="number"]:checked').val();\
        var names = '';\
        $('#form-name').children().each(function (i, elm) \{\
            names += $(elm).val() + '
\f1 \'81\'41
\f0 ';\
        \})\
        names = names.slice(0, -1);\
\
        var msg = `
\f1 \'8a\'f3\'96\'5d\'93\'fa\'81\'46
\f0 $\{date\}\\n
\f1 \'90\'6c\'90\'94\'81\'46
\f0 $\{number\}\\n
\f1 \'8e\'81\'96\'bc\'81\'46
\f0 $\{names\}`;\
        sendText(msg);\
\
        return false;\
    \});\
\});}