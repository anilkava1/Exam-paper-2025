// ==========================================
// 1. DATA SECTION
// ==========================================
const data10th = [
      {"SrNo":124,"Subject":"Class X Agriculture","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/95_Agriculture.pdf"},
        {"SrNo":125,"Subject":"Class X Apparel","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/101_Apparel_H_E.pdf"},
        {"SrNo":126,"Subject":"Class X Arabic","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/24_Arabic.pdf"},
        {"SrNo":127,"Subject":"Class X Artificial Intelligence","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/104_Artificial_Intelleigence_NEW.pdf"},
        {"SrNo":128,"Subject":"Class X Assamese","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/15_Assamese.pdf"},
        {"SrNo":129,"Subject":"Class X Automotive","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/91_Automotive.pdf"},
        {"SrNo":130,"Subject":"Class X Bahasa Melayu","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/19_Bahasa_Melayu.pdf"},
        {"SrNo":131,"Subject":"Class X Banking and Insurance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/98_Banking_and_Insurance.pdf"},
        {"SrNo":132,"Subject":"Class X Beauty and Wellness","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/94_Beauty_and_Wellness.pdf"},
        {"SrNo":133,"Subject":"Class X Bengali","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/7_Bengali.pdf"},
        {"SrNo":134,"Subject":"Class X BODO","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/54_BODO.pdf"},
        {"SrNo":135,"Subject":"Class X Bhoti","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/64_Bhoti.pdf"},
        {"SrNo":136,"Subject":"Class X Bhutia","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/29-Bhutia.pdf"},
        {"SrNo":137,"Subject":"Class X Computer Application","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/53_Computer_Application.pdf"},
        {"SrNo":138,"Subject":"Class X Carnatic Music Vocal","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/49_Carnatic_Music_Vocal.pdf"},
        {"SrNo":139,"Subject":"Class X Carnatic Music Melodic Instruments","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/50_Carnatic_Music__Mel_Instru.pdf"},
        {"SrNo":140,"Subject":"Class X Carnatic Music Percussion Instruments","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/51_Carnatic_Music_Percussion_Instru.pdf"},
        {"SrNo":141,"Subject":"Class X Data Science","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/106_Data_Science.pdf"},
        {"SrNo":142,"Subject":"Class X Design Thinking Innovation","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/109_Design_Thinking_Innovation.pdf"},
        {"SrNo":143,"Subject":"Class X Element Book Keeping and Accountancy","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/135_Ele_Book_Keeping_and_Accountancy.pdf"},
        {"SrNo":144,"Subject":"Class X Electronics and Hardware","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/107_Electronics_and_Hardware.pdf"},
        {"SrNo":145,"Subject":"Class X Elements of Business","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/35_Elements_of_Business.pdf"},
        {"SrNo":146,"Subject":"Class X English Communicative","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/1_eng_communicative.pdf"},
        {"SrNo":147,"Subject":"Class X Food Production","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/96_Food_Production.pdf"},
        {"SrNo":148,"Subject":"Class X French","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/20_French.pdf"},
        {"SrNo":149,"Subject":"Class X Front Office Operations","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/97_Front_Office_Operations_H_E.pdf"},
        {"SrNo":150,"Subject":"Class X Foundation Skills for Sciences","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/108_Foundation_Skills_for_Sciences_H_E.pdf"},
        {"SrNo":151,"Subject":"Class X German","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/23_German_NEW.pdf"},
        {"SrNo":152,"Subject":"Class X Gurung","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/59-Gurung.pdf"},
        {"SrNo":153,"Subject":"Class X Gujarati","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/9_Gujarati.pdf"},
        {"SrNo":154,"Subject":"Class X Health Care","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/100_Health_Care.pdf"},
        {"SrNo":155,"Subject":"Class X Hindustani Music Percussion Instruments","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/34_Hindustani_Music_Percussion_Instruments.pdf"},
        {"SrNo":156,"Subject":"Class X Hindustani Music Vocal","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/33_Hindustani_Music_Vocal.pdf"},
        {"SrNo":157,"Subject":"Class X Home Science","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/37_Home_Science.pdf"},
        {"SrNo":158,"Subject":"Class X Hindustani Music Melodic Instruments","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/33A_Hin_Music_Mel_Instru.pdf"},
        {"SrNo":159,"Subject":"Class X Information Technology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/89_Information_Technology.pdf"},
        {"SrNo":160,"Subject":"Class X Introduction to Financial Markets","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/92_Introduction_to_Financial_Markets%20_E_H.pdf"},
        {"SrNo":161,"Subject":"Class X Japanese","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/43_Japanese.pdf"},
        {"SrNo":162,"Subject":"Class X Kannada Language","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/13_Kannada_Language.pdf"},
        {"SrNo":163,"Subject":"Class X Kokborok","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/21_Kokborok.pdf"},
        {"SrNo":164,"Subject":"Class X Kashmiri","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/39-Kashmiri.pdf"},
        {"SrNo":165,"Subject":"Class X Lepcha","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/27_Lepcha.pdf"},
        {"SrNo":166,"Subject":"Class X Limboo","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/28_Limboo.pdf"},
        {"SrNo":167,"Subject":"Class X Malayalam","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/12_malayalam_X.pdf"},
        {"SrNo":168,"Subject":"Class X Manipuri","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/16_Manipuri.pdf"},
        {"SrNo":169,"Subject":"Class X Marathi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/8_Marathi.pdf"},
        {"SrNo":170,"Subject":"Class X Marketing and Sales","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/99_Marketing_and_Sales.pdf"},
        {"SrNo":171,"Subject":"Class X Mizo","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/44_Mizo.pdf"},
        {"SrNo":172,"Subject":"Class X Multi Skill Foundation Course","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/103_Multi_Skill_Foundation_Course.pdf"},
        {"SrNo":173,"Subject":"Class X Multimedia","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/102_Multi_Media.pdf"},
        {"SrNo":174,"Subject":"Class X NCC","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/56_NCC.pdf"},
        {"SrNo":175,"Subject":"Class X Nepali","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/17_Nepali.pdf"},
        {"SrNo":176,"Subject":"Class X Odia","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/14_Odia.pdf"},
        {"SrNo":177,"Subject":"Class X Painting","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/38_Painting.pdf"},
        {"SrNo":178,"Subject":"Class X Persian","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/25_Persian.pdf"},
        {"SrNo":179,"Subject":"Class X Physical Activity Trainer","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/105_Physical_Activity_Trainer.pdf"},
        {"SrNo":180,"Subject":"Class X Punjabi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/6_Punjabi.pdf"},
        {"SrNo":181,"Subject":"Class X Retail","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/88_Retail_NEW.pdf"},
        {"SrNo":182,"Subject":"Class X Russian","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/22_Russian.pdf"},
        {"SrNo":183,"Subject":"Class X Rai","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/58-Rai.pdf"},
        {"SrNo":184,"Subject":"Class X Sanskrit","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/52_Sanskrit.pdf"},
        {"SrNo":185,"Subject":"Class X Sanskrit Communicative","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/65_Sanskrit_Communicative.pdf"},
        {"SrNo":186,"Subject":"Class X Security","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/90_Security.pdf"},
        {"SrNo":187,"Subject":"Class X Sherpa","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/61_Sherpa.pdf"},
        {"SrNo":188,"Subject":"Class X Sindhi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/26_Sindhi.pdf"},
        {"SrNo":189,"Subject":"Class X Spanish","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/45_Spanish.pdf"},
        {"SrNo":190,"Subject":"Class X Tamang","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/60_Tamang.pdf"},
        {"SrNo":191,"Subject":"Class X Tamil","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/10_Tamil.pdf"},
        {"SrNo":192,"Subject":"Class X Telugu","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/11_Telugu.pdf"},
        {"SrNo":193,"Subject":"Class X Telugu Telangana","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/57_Telugu_Telangana.pdf"},
        {"SrNo":194,"Subject":"Class X Thai","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/63_Thai.pdf"},
        {"SrNo":195,"Subject":"Class X Tibetan New","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/18_Tibetan_New.pdf"},
        {"SrNo":196,"Subject":"Class X Tangkhul","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/36-tangkhul_NEW.pdf"},
        {"SrNo":197,"Subject":"Class X Urdu Course A","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/5A_Urdu_Course_A.pdf"},
        {"SrNo":198,"Subject":"Class X Urdu Course B","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/X/5B_Urdu_Course_B.pdf"},
        {"SrNo":199,"Subject":"Website Policy (336 KB)","URL":"https://www.cbse.gov.in/cbsenew/documents/WEBSITE_POLICY_U.pdf"},
        {"SrNo":200,"Subject":"IGBC Certificate (Platinum)","URL":"https://www.cbse.gov.in/cbsenew/documents/CBSE_Green_Building_Platinum_Rating_Certificate_23032026.pdf"},
        {"SrNo":201,"Subject":"STQC Certificate","URL":"https://www.cbse.gov.in/cbsenew/documents/CBSE_STQC_Certificate.pdf"}
    // ... (Baki data waisa hi rehne dein)
];

const data12th = [
     {"SrNo":21,"Subject":"Class XII Agriculture","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/332_Agriculture.pdf"},
        {"SrNo":22,"Subject":"Class XII Air Conditioning & Refrigeration","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/351_Air_Conditioning_Refrigeration.pdf"},
        {"SrNo":23,"Subject":"Class XII Applied Mathematics","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/465_Applied_Mathematics.pdf"},
        {"SrNo":24,"Subject":"Class XII Arabic","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/16_Arabic.pdf"},
        {"SrNo":25,"Subject":"Class XII Artificial Intelligence","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/367_Artificial_Intelligence.pdf"},
        {"SrNo":26,"Subject":"Class XII Assamese","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/14_Assamese.pdf"},
        {"SrNo":27,"Subject":"Class XII Automotive","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/328_Automotive.pdf"},
        {"SrNo":28,"Subject":"Class XII Banking","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/335_Banking_NEW.pdf"},
        {"SrNo":29,"Subject":"Class XII Beauty & Wellness","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/331_Beauty_Wellness.pdf"},
        {"SrNo":30,"Subject":"Class XII Bengali","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/5_Bengali.pdf"},
        {"SrNo":31,"Subject":"Class XII Bharatnatyam Dance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/84_Bharatnatyam_Dance.pdf"},
        {"SrNo":32,"Subject":"Class XII Bhutia","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/27_Bhutia.pdf"},
        {"SrNo":33,"Subject":"Class XII Biotechnology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/99_Biotechnology.pdf"},
        {"SrNo":34,"Subject":"Class XII BODO","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/38_BODO.pdf"},
        {"SrNo":35,"Subject":"Class XII Business Administration","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/357_Business_Administration.pdf"},
        {"SrNo":36,"Subject":"Class XII Bhoti","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/32_Bhoti.pdf"},
        {"SrNo":37,"Subject":"Class XII Carnatic Music Vocal","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/76_Carnatic_Music_Vocal.pdf"},
        {"SrNo":38,"Subject":"Class XII Carnatic Music Melodic Instruments","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/77_CARNATIC_MUSIC_Melodic_Instruments.pdf"},
        {"SrNo":39,"Subject":"Class XII Carnatic Music Instrumental Percussion","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/78_CARNATIC_MUSIC_INSTRUMENTAL_PERCUSSION.pdf"},
        {"SrNo":40,"Subject":"Class XII Commercial Art","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/72_Commercial_Art.pdf"},
        {"SrNo":41,"Subject":"Class XII Computer Science","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/91_COMPUTER_SCIENCE.pdf"},
        {"SrNo":42,"Subject":"Class XII Cost Accounting","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/347_Cost_Accounting.pdf"},
        {"SrNo":43,"Subject":"Class XII Design","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/354_Design.pdf"},
        {"SrNo":44,"Subject":"Class XII Data Science","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/368_Data_Science.pdf"},
        {"SrNo":45,"Subject":"Class XII Design Thinking & Innovation","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/372_Design_Thinking_Innovation_New.pdf"},
        {"SrNo":46,"Subject":"Class XII Early Childhood Care Education","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/366_EARLY_CHILDHOOD_CARE_EDUCATION.pdf"},
        {"SrNo":47,"Subject":"Class XII Electrical Technology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/343_Electrical_Technology.pdf"},
        {"SrNo":48,"Subject":"Class XII Electronics Technology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/344_Electronics_Technology.pdf"},
        {"SrNo":49,"Subject":"Class XII Electronics Hardware","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/371_Electronics_Hardware.pdf"},
        {"SrNo":50,"Subject":"Class XII Engineering Graphics","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/68_Engineering_Graphics.pdf"},
        {"SrNo":51,"Subject":"Class XII Entrepreneurship","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/98_Entrepreneurship.pdf"},
        {"SrNo":52,"Subject":"Class XII Fashion Studies","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/361_Fashion_Studies.pdf"},
        {"SrNo":53,"Subject":"Class XII Financial Markets Management","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/329_Financial_Markets_Management.pdf"},
        {"SrNo":54,"Subject":"Class XII Food Nutrition Dietetics","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/358_Food_Nutrition_Dietetics.pdf"},
        {"SrNo":55,"Subject":"Class XII Food Production","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/333_Food_Production.pdf"},
        {"SrNo":56,"Subject":"Class XII French","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/18_French.pdf"},
        {"SrNo":57,"Subject":"Class XII Front Office Operations","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/334_Front_Office_Operations.pdf"},
        {"SrNo":58,"Subject":"Class XII German","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/20_German.pdf"},
        {"SrNo":59,"Subject":"Class XII Graphics","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/74_Graphics.pdf"},
        {"SrNo":60,"Subject":"Class XII Gujarati","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/10_Gujarati.pdf"},
        {"SrNo":61,"Subject":"Class XII Geospatial Technology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/342-Geospatial_technology.pdf"},
        {"SrNo":62,"Subject":"Class XII Health Care","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/337_Health_Care.pdf"},
        {"SrNo":63,"Subject":"Class XII Hindustani Music Melodic Instruments","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/80_Hindustani_Music_Melodic_Insmts_Theory.pdf"},
        {"SrNo":64,"Subject":"Class XII Hindustani Music Percussion","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/81_Hindustani_Music_Percussion.pdf"},
        {"SrNo":65,"Subject":"Class XII Home Science","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/69_Home_Science.pdf"},
        {"SrNo":66,"Subject":"Class XII Horticulture","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/340_Horticulture.pdf"},
        {"SrNo":67,"Subject":"Class XII Informatics Practices","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/90_INFORMATICS_PRACTICES.pdf"},
        {"SrNo":68,"Subject":"Class XII Insurance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/338_Insurance.pdf"},
        {"SrNo":69,"Subject":"Class XII Japanese","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/37_Japanese.pdf"},
        {"SrNo":70,"Subject":"Class XII Kannada Language","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/15_Kannada_Language.pdf"},
        {"SrNo":71,"Subject":"Class XII Kathak Dance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/82_Kathak_Dance.pdf"},
        {"SrNo":72,"Subject":"Class XII Kokborko","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/31_Kokborko.pdf"},
        {"SrNo":73,"Subject":"Class XII Knowledge Traditions Practices India","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/39_KNOWLEDGE_TRADITIONS_PRACTICES_INDIA.pdf"},
        {"SrNo":74,"Subject":"Class XII Kuchipudi Dance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/88_Kuchipudi_Dance.pdf"},
        {"SrNo":75,"Subject":"Class XII Legal Studies","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/40_Legal_Studies.pdf"},
        {"SrNo":76,"Subject":"Class XII Lepcha","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/26_Lepcha.pdf"},
        {"SrNo":77,"Subject":"Class XII Library Information Science","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/360_Library_Information_Science.pdf"},
        {"SrNo":78,"Subject":"Class XII Limboo","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/25_Limboo.pdf"},
        {"SrNo":79,"Subject":"Class XII Malayalam","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/70_malayalam_XII.pdf"},
        {"SrNo":80,"Subject":"Class XII Manipuri","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/11_Manipuri.pdf"},
        {"SrNo":81,"Subject":"Class XII Manipuri Dance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/83_Manipuri_Dance.pdf"},
        {"SrNo":82,"Subject":"Class XII Marathi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/9_Marathi.pdf"},
        {"SrNo":83,"Subject":"Class XII Marketing","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/336_Marketing.pdf"},
        {"SrNo":84,"Subject":"Class XII Mass Media Studies","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/359_Mass_Media_Studies.pdf"},
        {"SrNo":85,"Subject":"Class XII Medical Diagnostics","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/352_Medical_Diagnostics.pdf"},
        {"SrNo":86,"Subject":"Class XII Mizo","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/97_Mizo.pdf"},
        {"SrNo":87,"Subject":"Class XII Multimedia","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/345_multimedia.pdf"},
        {"SrNo":88,"Subject":"Class XII Music Hindustani Vocal Theory","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/79_Music_Hindustani_vocal_Theory.pdf"},
        {"SrNo":89,"Subject":"Class XII NCC","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/42_NCC_NEW.pdf"},
        {"SrNo":90,"Subject":"Class XII Nepali","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/24_NEPALI.pdf"},
        {"SrNo":91,"Subject":"Class XII Odia","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/13_Odia.pdf"},
        {"SrNo":92,"Subject":"Class XII Odissi Dance","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/87_Odissi_Dance.pdf"},
        {"SrNo":93,"Subject":"Class XII Office Procedures Practices","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/348_OFFICE_PROCEDURES_PRACTICES.pdf"},
        {"SrNo":94,"Subject":"Class XII Painting","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/71_Painting.pdf"},
        {"SrNo":95,"Subject":"Class XII Persian","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/23_Persian.pdf"},
        {"SrNo":96,"Subject":"Class XII Physical Activity Trainer","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/369_Physical_Activity_Trainer.pdf"},
        {"SrNo":97,"Subject":"Class XII Physical Education","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/75_Physical%20Education.pdf"},
        {"SrNo":98,"Subject":"Class XII Psychology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/63_psychology.pdf"},
        {"SrNo":99,"Subject":"Class XII Punjabi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/4_Punjabi.pdf"},
        {"SrNo":100,"Subject":"Class XII Retail","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/325_Retail_NEW.pdf"},
        {"SrNo":101,"Subject":"Class XII Russian","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/21-Russian.pdf"},
        {"SrNo":102,"Subject":"Class XII Salesmanship","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/355_Salesmanship.pdf"},
        {"SrNo":103,"Subject":"Class XII Sanskrit Core","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/22_Sanskrit_Core.pdf"},
        {"SrNo":104,"Subject":"Class XII Sanskrit Elective","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/49_Sanskrit_Elective_NEW.pdf"},
        {"SrNo":105,"Subject":"Class XII Sculpture","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/73_Sculpture.pdf"},
        {"SrNo":106,"Subject":"Class XII Shorthand English","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/349_SHORTHAND_ENGLISH.pdf"},
        {"SrNo":107,"Subject":"Class XII Shorthand Hindi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/350_Shorthand_Hindi.pdf"},
        {"SrNo":108,"Subject":"Class XII Sindhi","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/8_Sindhi.pdf"},
        {"SrNo":109,"Subject":"Class XII Sociology","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/62_Sociology.pdf"},
        {"SrNo":110,"Subject":"Class XII Spanish","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/95_Spanish.pdf"},
        {"SrNo":111,"Subject":"Class XII Tamil","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/6_Tamil.pdf"},
        {"SrNo":112,"Subject":"Class XII Tangkhul","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/35_tangkhul.pdf"},
        {"SrNo":113,"Subject":"Class XII Taxation","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/346_Taxation.pdf"},
        {"SrNo":114,"Subject":"Class XII Telugu","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/7_Telugu.pdf"},
        {"SrNo":115,"Subject":"Class XII Telugu Telangana","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/50_Telugu-Telangana.pdf"},
        {"SrNo":116,"Subject":"Class XII Textile Design","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/353_Textile_Design.pdf"},
        {"SrNo":117,"Subject":"Class XII Tibetan","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/17_Tibetan.pdf"},
        {"SrNo":118,"Subject":"Class XII Tourism","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/330_Tourism.pdf"},
        {"SrNo":119,"Subject":"Class XII Typography Computer Applications","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/341_Typography_Computer_Applications.pdf"},
        {"SrNo":120,"Subject":"Class XII Urdu Core","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/3_Urdu_Core.pdf"},
        {"SrNo":121,"Subject":"Class XII Urdu Elective","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/30_Urdu_Elective.pdf"},
        {"SrNo":122,"Subject":"Class XII Web Applications","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/327_WEB_APPLICATIONS_final.pdf"},
        {"SrNo":123,"Subject":"Class XII Yoga","URL":"https://www.cbse.gov.in/cbsenew/question-paper/2025/XII/365_Yoga.pdf"}
    // ... (Baki data waisa hi rehne dein)
];

const dataEngineering = [
    { "SrNo": 1, "Subject": "Data Structures", "Dept": "CS", "URL": "#" },
    { "SrNo": 2, "Subject": "Thermodynamics", "Dept": "MECH", "URL": "#" }
];

let pendingDownloadURL = "";

// ==========================================
// 2. AD MODAL LOGIC (New Addition)
// ==========================================

function openAdModal(url) {
    pendingDownloadURL = url;
    const modal = document.getElementById('adModal');
    const dlBtn = document.getElementById('finalDownloadBtn');
    
    if (modal && dlBtn) {
        modal.style.display = "flex"; // Modal show karo
        dlBtn.disabled = true;
        let count = 3; // 3 seconds timer
        dlBtn.innerText = `Wait (${count}s)...`;

        const timer = setInterval(() => {
            count--;
            if (count > 0) {
                dlBtn.innerText = `Wait (${count}s)...`;
            } else {
                clearInterval(timer);
                dlBtn.disabled = false;
                dlBtn.innerText = "Download Now";
                
                // Final Download Function
                dlBtn.onclick = function() {
                    window.open(pendingDownloadURL, '_blank');
                    closeAd();
                };
            }
        }, 1000);
    }
}

function closeAd() {
    const modal = document.getElementById('adModal');
    if(modal) modal.style.display = "none";
}

// ==========================================
// 3. SEARCH LOGIC
// ==========================================

function attachSearchListeners() {
    const searchInputs = [
        { inputId: 'search10', tbodyId: 'tbody10' },
        { inputId: 'search12', tbodyId: 'tbody12' }
    ];

    searchInputs.forEach(config => {
        const input = document.getElementById(config.inputId);
        if (input) {
            input.oninput = function() {
                const query = this.value.toLowerCase().trim();
                const rows = document.querySelectorAll(`#${config.tbodyId} tr`);
                rows.forEach(row => {
                    if(row.cells[1]) {
                        const subject = row.cells[1].innerText.toLowerCase();
                        row.style.display = subject.includes(query) ? "" : "none";
                    }
                });
            };
        }
    });
}

// ==========================================
// 4. PAGE & DATA RENDERING
// ==========================================

function showPage(pageId) {
    document.querySelectorAll('.page-content').forEach(page => {
        page.style.display = 'none';
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
        targetPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function renderAllTables() {
    const tb10 = document.getElementById('tbody10');
    const tb12 = document.getElementById('tbody12');

    // NOTE: Yahan <a> tag ko button/function se replace kiya hai
    if(tb10) {
        tb10.innerHTML = data10th.map(item => `
            <tr>
                <td>${item.SrNo}</td>
                <td>${item.Subject}</td>
                <td><button onclick="openAdModal('${item.URL}')" class="btn-dl">Download</button></td>
            </tr>
        `).join('');
    }

    if(tb12) {
        tb12.innerHTML = data12th.map(item => `
            <tr>
                <td>${item.SrNo}</td>
                <td>${item.Subject}</td>
                <td><button onclick="openAdModal('${item.URL}')" class="btn-dl">Download</button></td>
            </tr>
        `).join('');
    }

    renderEngineering('All');
}

function renderEngineering(dept) {
    const tbEng = document.getElementById('tbodyEng');
    if(!tbEng) return;

    const filtered = dept === 'All' ? dataEngineering : dataEngineering.filter(item => item.Dept === dept);
    tbEng.innerHTML = filtered.map(item => `
        <tr>
            <td>${item.SrNo}</td>
            <td>${item.Subject}</td>
            <td><span class="badge">${item.Dept}</span></td>
            <td><button onclick="openAdModal('${item.URL}')" class="btn-dl">Download</button></td>
        </tr>
    `).join('');
}

// ==========================================
// 5. INITIALIZE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    renderAllTables();
    attachSearchListeners();
    showPage('welcome');

    // Modal ke bahar click karne par band ho jaye
    window.onclick = function(event) {
        const modal = document.getElementById('adModal');
        if (event.target == modal) {
            closeAd();
        }
    };
});

const deptSelect = document.getElementById('deptSelect');
if(deptSelect) {
    deptSelect.onchange = (e) => renderEngineering(e.target.value);
}