document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const nitrogen_max = Math.max(...Object.values(AirPollution).map(({nitrogen}) => parseFloat(nitrogen)));
    const nitrogen_min = Math.min(...Object.values(AirPollution).map(({nitrogen}) => parseFloat(nitrogen)));

    const sulpher_dioxide_max = Math.max(...Object.values(AirPollution).map(({sulpher_dioxide}) => parseFloat(sulpher_dioxide)));
    const sulpher_dioxide_min = Math.min(...Object.values(AirPollution).map(({sulpher_dioxide}) => parseFloat(sulpher_dioxide)));

    const carbon_monoxide_max = Math.max(...Object.values(AirPollution).map(({carbon_monoxide}) => parseFloat(carbon_monoxide)));
    const carbon_monoxide_min = Math.min(...Object.values(AirPollution).map(({carbon_monoxide}) => parseFloat(carbon_monoxide)));

    const black_carbon_max = Math.max(...Object.values(AirPollution).map(({black_carbon}) => parseFloat(black_carbon)));
    const black_carbon_min = Math.min(...Object.values(AirPollution).map(({black_carbon}) => parseFloat(black_carbon)));

    const ammonia_max = Math.max(...Object.values(AirPollution).map(({ammonia}) => parseFloat(ammonia)));
    const ammonia_min = Math.min(...Object.values(AirPollution).map(({ammonia}) => parseFloat(ammonia)));

    // console.log(Nitrogen_max)
    const nitrogen_one = (nitrogen_max - nitrogen_min) / 100
    const sulpher_dioxide_one = (sulpher_dioxide_max - sulpher_dioxide_min) / 100
    const carbon_monoxide_one = (carbon_monoxide_max - carbon_monoxide_min) / 100
    const black_carbon_one = (black_carbon_max - black_carbon_min) / 100
    const ammonia_one = (ammonia_max - ammonia_min) / 100

    const value_box = document.querySelector('.value-box11')

    const value_chart_11_1 = document.querySelector('.value_chart11_1')
    const value_number_11_1 = document.querySelector('.value_number11_1')

    const value_chart_11_2 = document.querySelector('.value_chart11_2')
    const value_number_11_2 = document.querySelector('.value_number11_2')

    const value_chart_11_3 = document.querySelector('.value_chart11_3')
    const value_number_11_3 = document.querySelector('.value_number11_3')

    const value_chart_11_4 = document.querySelector('.value_chart11_4')
    const value_number_11_4 = document.querySelector('.value_number11_4')

    const value_chart_11_5 = document.querySelector('.value_chart11_5')
    const value_number_11_5 = document.querySelector('.value_number11_5')

    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 1750 && sliderValue <= 2022){
            value_box.style.opacity = 1;

            var releventData = AirPollution.filter(data => (data.year) == sliderValue)


            var nitrogen = releventData[0].nitrogen;
            // value = Math.floor(value * 100) / 100;
            value_number_11_1.innerText = nitrogen
            const percent_nitrogen = parseInt((nitrogen - nitrogen_min)/nitrogen_one)
            value_chart_11_1.style.width =percent_nitrogen + "%";

            var sulpher_dioxide = releventData[0].sulpher_dioxide;
            // value = Math.floor(value * 100) / 100;
            value_number_11_2.innerText = sulpher_dioxide
            const percent_sulpher_dioxide = parseInt((sulpher_dioxide - sulpher_dioxide_min)/sulpher_dioxide_one)
            value_chart_11_2.style.width =percent_sulpher_dioxide + "%";

            var carbon_monoxide = releventData[0].carbon_monoxide;
            // value = Math.floor(value * 100) / 100;
            value_number_11_3.innerText = carbon_monoxide
            const percent_carbon_monoxide = parseInt((carbon_monoxide - carbon_monoxide_min)/carbon_monoxide_one)
            value_chart_11_3.style.width =percent_carbon_monoxide + "%";

            var black_carbon = releventData[0].black_carbon;
            // value = Math.floor(value * 100) / 100;
            value_number_11_4.innerText = black_carbon
            const percent_black_carbon = parseInt((black_carbon - black_carbon_min)/black_carbon_one)
            value_chart_11_4.style.width =percent_black_carbon + "%";

            var ammonia = releventData[0].ammonia;
            // value = Math.floor(value * 100) / 100;
            value_number_11_5.innerText = ammonia
            const percent_ammonia = parseInt((ammonia - ammonia_min)/ammonia_one)
            value_chart_11_5.style.width =percent_ammonia + "%";

        }else if(sliderValue < 1750){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});


const AirPollution = [
    {
        "location": "world",
        "year": "1750",
        "nitrogen": "184890.8",
        "sulpher_dioxide": "824883.25",
        "carbon_monoxide": "67715250",
        "organic_carbon": "2238218.5",
        "non_methane_volatile_organic_compounds": "7252847",
        "black_carbon": "520096.1",
        "ammonia": "3232090.2"
    },
    {
        "location": "world",
        "year": "1760",
        "nitrogen": "190625.06",
        "sulpher_dioxide": "1147852",
        "carbon_monoxide": "69548700",
        "organic_carbon": "2308176.8",
        "non_methane_volatile_organic_compounds": "7448673",
        "black_carbon": "533239.3",
        "ammonia": "3321029"
    },
    {
        "location": "world",
        "year": "1770",
        "nitrogen": "197899",
        "sulpher_dioxide": "1897544.4",
        "carbon_monoxide": "71214250",
        "organic_carbon": "2377467.8",
        "non_methane_volatile_organic_compounds": "7625596",
        "black_carbon": "545336.94",
        "ammonia": "3395693.5"
    },
    {
        "location": "world",
        "year": "1780",
        "nitrogen": "212941.73",
        "sulpher_dioxide": "596877.8",
        "carbon_monoxide": "77485440",
        "organic_carbon": "2557838.2",
        "non_methane_volatile_organic_compounds": "8258267.5",
        "black_carbon": "598098.3",
        "ammonia": "3745677.8"
    },
    {
        "location": "world",
        "year": "1790",
        "nitrogen": "224735.95",
        "sulpher_dioxide": "745682.25",
        "carbon_monoxide": "80390584",
        "organic_carbon": "2666148",
        "non_methane_volatile_organic_compounds": "8561685",
        "black_carbon": "621810.4",
        "ammonia": "3886666.5"
    },
    {
        "location": "world",
        "year": "1800",
        "nitrogen": "239767.89",
        "sulpher_dioxide": "853486.5",
        "carbon_monoxide": "81551450",
        "organic_carbon": "2754972.8",
        "non_methane_volatile_organic_compounds": "8682214",
        "black_carbon": "630098.56",
        "ammonia": "3884089.8"
    },
    {
        "location": "world",
        "year": "1801",
        "nitrogen": "241974.95",
        "sulpher_dioxide": "860307.2",
        "carbon_monoxide": "82145650",
        "organic_carbon": "2776558.8",
        "non_methane_volatile_organic_compounds": "8743140",
        "black_carbon": "634696.56",
        "ammonia": "3918565.2"
    },
    {
        "location": "world",
        "year": "1802",
        "nitrogen": "254719.64",
        "sulpher_dioxide": "898969.75",
        "carbon_monoxide": "82849576",
        "organic_carbon": "2800619.5",
        "non_methane_volatile_organic_compounds": "8817136",
        "black_carbon": "641346.6",
        "ammonia": "3953291.5"
    },
    {
        "location": "world",
        "year": "1803",
        "nitrogen": "250046.23",
        "sulpher_dioxide": "913779.6",
        "carbon_monoxide": "83437096",
        "organic_carbon": "2822187.5",
        "non_methane_volatile_organic_compounds": "8869006",
        "black_carbon": "645776.44",
        "ammonia": "3987849.2"
    },
    {
        "location": "world",
        "year": "1804",
        "nitrogen": "253301.44",
        "sulpher_dioxide": "920767.3",
        "carbon_monoxide": "84123280",
        "organic_carbon": "2845826.2",
        "non_methane_volatile_organic_compounds": "8934458",
        "black_carbon": "652013.25",
        "ammonia": "4022668.8"
    },
    {
        "location": "world",
        "year": "1805",
        "nitrogen": "255429.53",
        "sulpher_dioxide": "964831.8",
        "carbon_monoxide": "84669656",
        "organic_carbon": "2866142.5",
        "non_methane_volatile_organic_compounds": "8991958",
        "black_carbon": "655858.6",
        "ammonia": "4057559.2"
    },
    {
        "location": "world",
        "year": "1806",
        "nitrogen": "259465.28",
        "sulpher_dioxide": "1016143.7",
        "carbon_monoxide": "85308780",
        "organic_carbon": "2888792",
        "non_methane_volatile_organic_compounds": "9054436",
        "black_carbon": "661333.2",
        "ammonia": "4092576.8"
    },
    {
        "location": "world",
        "year": "1807",
        "nitrogen": "261147.45",
        "sulpher_dioxide": "1020471.44",
        "carbon_monoxide": "85918584",
        "organic_carbon": "2910268.8",
        "non_methane_volatile_organic_compounds": "9115436",
        "black_carbon": "666151.9",
        "ammonia": "4127579.2"
    },
    {
        "location": "world",
        "year": "1808",
        "nitrogen": "263246.8",
        "sulpher_dioxide": "1016533.9",
        "carbon_monoxide": "86477970",
        "organic_carbon": "2930909.8",
        "non_methane_volatile_organic_compounds": "9174691",
        "black_carbon": "670179.06",
        "ammonia": "4162802.8"
    },
    {
        "location": "world",
        "year": "1809",
        "nitrogen": "264864.97",
        "sulpher_dioxide": "1018657.8",
        "carbon_monoxide": "87061880",
        "organic_carbon": "2951876.2",
        "non_methane_volatile_organic_compounds": "9234560",
        "black_carbon": "674611.9",
        "ammonia": "4198136.5"
    },
    {
        "location": "world",
        "year": "1810",
        "nitrogen": "268147.56",
        "sulpher_dioxide": "978651.4",
        "carbon_monoxide": "87723200",
        "organic_carbon": "2976016.5",
        "non_methane_volatile_organic_compounds": "9299131",
        "black_carbon": "681173.4",
        "ammonia": "4233599.5"
    },
    {
        "location": "world",
        "year": "1811",
        "nitrogen": "272321.2",
        "sulpher_dioxide": "1020886.4",
        "carbon_monoxide": "88182160",
        "organic_carbon": "2996624.8",
        "non_methane_volatile_organic_compounds": "9343322",
        "black_carbon": "684606.4",
        "ammonia": "4252767"
    },
    {
        "location": "world",
        "year": "1812",
        "nitrogen": "275284.53",
        "sulpher_dioxide": "1063718.1",
        "carbon_monoxide": "88619420",
        "organic_carbon": "3016651",
        "non_methane_volatile_organic_compounds": "9386592",
        "black_carbon": "687622.94",
        "ammonia": "4271975.5"
    },
    {
        "location": "world",
        "year": "1813",
        "nitrogen": "277113.94",
        "sulpher_dioxide": "1077855",
        "carbon_monoxide": "89014616",
        "organic_carbon": "3035646.8",
        "non_methane_volatile_organic_compounds": "9427982",
        "black_carbon": "689908.3",
        "ammonia": "4291222"
    },
    {
        "location": "world",
        "year": "1814",
        "nitrogen": "279788.16",
        "sulpher_dioxide": "1064471.9",
        "carbon_monoxide": "89427570",
        "organic_carbon": "3055073",
        "non_methane_volatile_organic_compounds": "9470348",
        "black_carbon": "692528.8",
        "ammonia": "4310517.5"
    },
    {
        "location": "world",
        "year": "1815",
        "nitrogen": "282604.1",
        "sulpher_dioxide": "1081825.9",
        "carbon_monoxide": "89853580",
        "organic_carbon": "3074812",
        "non_methane_volatile_organic_compounds": "9513231",
        "black_carbon": "695405.7",
        "ammonia": "4329858"
    },
    {
        "location": "world",
        "year": "1816",
        "nitrogen": "286121.78",
        "sulpher_dioxide": "1128878",
        "carbon_monoxide": "90369440",
        "organic_carbon": "3096342.8",
        "non_methane_volatile_organic_compounds": "9558419",
        "black_carbon": "699955.44",
        "ammonia": "4349117.5"
    },
    {
        "location": "world",
        "year": "1817",
        "nitrogen": "288282.03",
        "sulpher_dioxide": "1133441.6",
        "carbon_monoxide": "90788040",
        "organic_carbon": "3115799.2",
        "non_methane_volatile_organic_compounds": "9600791",
        "black_carbon": "702726.9",
        "ammonia": "4368544"
    },
    {
        "location": "world",
        "year": "1818",
        "nitrogen": "290258.38",
        "sulpher_dioxide": "1153335.6",
        "carbon_monoxide": "91170936",
        "organic_carbon": "3134477.2",
        "non_methane_volatile_organic_compounds": "9641610",
        "black_carbon": "704871.4",
        "ammonia": "4388008.5"
    },
    {
        "location": "world",
        "year": "1819",
        "nitrogen": "291928.88",
        "sulpher_dioxide": "1156326.4",
        "carbon_monoxide": "91576160",
        "organic_carbon": "3157094.2",
        "non_methane_volatile_organic_compounds": "9683114",
        "black_carbon": "709457.2",
        "ammonia": "4407514.5"
    },
    {
        "location": "world",
        "year": "1820",
        "nitrogen": "294120.6",
        "sulpher_dioxide": "1195949",
        "carbon_monoxide": "91982210",
        "organic_carbon": "3177206",
        "non_methane_volatile_organic_compounds": "9725016",
        "black_carbon": "712526",
        "ammonia": "4427069"
    },
    {
        "location": "world",
        "year": "1821",
        "nitrogen": "297362.44",
        "sulpher_dioxide": "1254218.8",
        "carbon_monoxide": "92747170",
        "organic_carbon": "3209816.2",
        "non_methane_volatile_organic_compounds": "9804221",
        "black_carbon": "718853.56",
        "ammonia": "4465293.5"
    },
    {
        "location": "world",
        "year": "1822",
        "nitrogen": "301953.56",
        "sulpher_dioxide": "1304974.5",
        "carbon_monoxide": "93552240",
        "organic_carbon": "3243311.5",
        "non_methane_volatile_organic_compounds": "9884869",
        "black_carbon": "725913.2",
        "ammonia": "4503631.5"
    },
    {
        "location": "world",
        "year": "1823",
        "nitrogen": "308321.22",
        "sulpher_dioxide": "1281251.8",
        "carbon_monoxide": "94373730",
        "organic_carbon": "3279666.8",
        "non_methane_volatile_organic_compounds": "9966423",
        "black_carbon": "734748.3",
        "ammonia": "4542084.5"
    },
    {
        "location": "world",
        "year": "1824",
        "nitrogen": "314112.12",
        "sulpher_dioxide": "1301305.6",
        "carbon_monoxide": "95192800",
        "organic_carbon": "3314466",
        "non_methane_volatile_organic_compounds": "10047681",
        "black_carbon": "742662.56",
        "ammonia": "4580645"
    },
    {
        "location": "world",
        "year": "1825",
        "nitrogen": "317705.62",
        "sulpher_dioxide": "1339365.2",
        "carbon_monoxide": "95972400",
        "organic_carbon": "3347964.8",
        "non_methane_volatile_organic_compounds": "10127291",
        "black_carbon": "749831.2",
        "ammonia": "4619314.5"
    },
    {
        "location": "world",
        "year": "1826",
        "nitrogen": "320570.6",
        "sulpher_dioxide": "1420691.9",
        "carbon_monoxide": "96731640",
        "organic_carbon": "3380647.5",
        "non_methane_volatile_organic_compounds": "10205451",
        "black_carbon": "756501.7",
        "ammonia": "4657951"
    },
    {
        "location": "world",
        "year": "1827",
        "nitrogen": "327463.97",
        "sulpher_dioxide": "1557704.1",
        "carbon_monoxide": "97599960",
        "organic_carbon": "3416338.8",
        "non_methane_volatile_organic_compounds": "10289461",
        "black_carbon": "765243.56",
        "ammonia": "4696856.5"
    },
    {
        "location": "world",
        "year": "1828",
        "nitrogen": "330374.28",
        "sulpher_dioxide": "1582632.5",
        "carbon_monoxide": "98353810",
        "organic_carbon": "3447526.5",
        "non_methane_volatile_organic_compounds": "10367272",
        "black_carbon": "771085.06",
        "ammonia": "4735847"
    },
    {
        "location": "world",
        "year": "1829",
        "nitrogen": "333688.56",
        "sulpher_dioxide": "1614444.6",
        "carbon_monoxide": "99092936",
        "organic_carbon": "3477965.5",
        "non_methane_volatile_organic_compounds": "10444150",
        "black_carbon": "776402.5",
        "ammonia": "4774943.5"
    },
    {
        "location": "world",
        "year": "1830",
        "nitrogen": "362347.8",
        "sulpher_dioxide": "1892453.6",
        "carbon_monoxide": "100328744",
        "organic_carbon": "3521634.2",
        "non_methane_volatile_organic_compounds": "10548875",
        "black_carbon": "791600.7",
        "ammonia": "4814322"
    },
    {
        "location": "world",
        "year": "1831",
        "nitrogen": "359966.62",
        "sulpher_dioxide": "1964084.6",
        "carbon_monoxide": "100986280",
        "organic_carbon": "3557378.2",
        "non_methane_volatile_organic_compounds": "10622693",
        "black_carbon": "796051.4",
        "ammonia": "4848302.5"
    },
    {
        "location": "world",
        "year": "1832",
        "nitrogen": "365410.6",
        "sulpher_dioxide": "2011759",
        "carbon_monoxide": "101754670",
        "organic_carbon": "3594308.2",
        "non_methane_volatile_organic_compounds": "10704936",
        "black_carbon": "801592.44",
        "ammonia": "4882444.5"
    },
    {
        "location": "world",
        "year": "1833",
        "nitrogen": "369923.72",
        "sulpher_dioxide": "2028240.5",
        "carbon_monoxide": "102551944",
        "organic_carbon": "3632025.8",
        "non_methane_volatile_organic_compounds": "10786765",
        "black_carbon": "807850.9",
        "ammonia": "4916661.5"
    },
    {
        "location": "world",
        "year": "1834",
        "nitrogen": "374663.84",
        "sulpher_dioxide": "2077493.4",
        "carbon_monoxide": "103358136",
        "organic_carbon": "3674383.5",
        "non_methane_volatile_organic_compounds": "10869531",
        "black_carbon": "816884.94",
        "ammonia": "4950956.5"
    },
    {
        "location": "world",
        "year": "1835",
        "nitrogen": "380136.7",
        "sulpher_dioxide": "2190054",
        "carbon_monoxide": "104123230",
        "organic_carbon": "3715991.2",
        "non_methane_volatile_organic_compounds": "10951248",
        "black_carbon": "825562.56",
        "ammonia": "4985364.5"
    },
    {
        "location": "world",
        "year": "1836",
        "nitrogen": "400500.62",
        "sulpher_dioxide": "2331532.8",
        "carbon_monoxide": "105293810",
        "organic_carbon": "3765500.5",
        "non_methane_volatile_organic_compounds": "11049699",
        "black_carbon": "840260.8",
        "ammonia": "5019756"
    },
    {
        "location": "world",
        "year": "1837",
        "nitrogen": "403798.38",
        "sulpher_dioxide": "2330929",
        "carbon_monoxide": "106003690",
        "organic_carbon": "3803329.2",
        "non_methane_volatile_organic_compounds": "11128547",
        "black_carbon": "846571.44",
        "ammonia": "5054327"
    },
    {
        "location": "world",
        "year": "1838",
        "nitrogen": "410969.94",
        "sulpher_dioxide": "2435108.2",
        "carbon_monoxide": "106841690",
        "organic_carbon": "3842610",
        "non_methane_volatile_organic_compounds": "11211149",
        "black_carbon": "854188.3",
        "ammonia": "5088970"
    },
    {
        "location": "world",
        "year": "1839",
        "nitrogen": "419609.9",
        "sulpher_dioxide": "2564137",
        "carbon_monoxide": "107655500",
        "organic_carbon": "3881173",
        "non_methane_volatile_organic_compounds": "11293606",
        "black_carbon": "861362.2",
        "ammonia": "5123721"
    },
    {
        "location": "world",
        "year": "1840",
        "nitrogen": "430230.8",
        "sulpher_dioxide": "2592015.5",
        "carbon_monoxide": "108536910",
        "organic_carbon": "3923776.5",
        "non_methane_volatile_organic_compounds": "11379377",
        "black_carbon": "871435.2",
        "ammonia": "5158576.5"
    },
    {
        "location": "world",
        "year": "1841",
        "nitrogen": "438157.34",
        "sulpher_dioxide": "2620753.2",
        "carbon_monoxide": "109406390",
        "organic_carbon": "3966556.2",
        "non_methane_volatile_organic_compounds": "11462531",
        "black_carbon": "880113.1",
        "ammonia": "5190667"
    },
    {
        "location": "world",
        "year": "1842",
        "nitrogen": "448094.97",
        "sulpher_dioxide": "2722301.5",
        "carbon_monoxide": "110318630",
        "organic_carbon": "3996885.2",
        "non_methane_volatile_organic_compounds": "11546649",
        "black_carbon": "881799.2",
        "ammonia": "5222846"
    },
    {
        "location": "world",
        "year": "1843",
        "nitrogen": "457253.8",
        "sulpher_dioxide": "2860755.5",
        "carbon_monoxide": "111180000",
        "organic_carbon": "4040982",
        "non_methane_volatile_organic_compounds": "11627483",
        "black_carbon": "891701.8",
        "ammonia": "5255065.5"
    },
    {
        "location": "world",
        "year": "1844",
        "nitrogen": "471886.28",
        "sulpher_dioxide": "3003610.5",
        "carbon_monoxide": "112117070",
        "organic_carbon": "4086858.8",
        "non_methane_volatile_organic_compounds": "11714471",
        "black_carbon": "903045.2",
        "ammonia": "5287419"
    },
    {
        "location": "world",
        "year": "1845",
        "nitrogen": "489875.25",
        "sulpher_dioxide": "3246105.2",
        "carbon_monoxide": "113195430",
        "organic_carbon": "4137015.2",
        "non_methane_volatile_organic_compounds": "11807990",
        "black_carbon": "917754.5",
        "ammonia": "5319723"
    },
    {
        "location": "world",
        "year": "1846",
        "nitrogen": "500542.75",
        "sulpher_dioxide": "3185028.5",
        "carbon_monoxide": "113855384",
        "organic_carbon": "4182565.5",
        "non_methane_volatile_organic_compounds": "11884814",
        "black_carbon": "928529.9",
        "ammonia": "5352228"
    },
    {
        "location": "world",
        "year": "1847",
        "nitrogen": "521978.38",
        "sulpher_dioxide": "3402226.8",
        "carbon_monoxide": "114940010",
        "organic_carbon": "4237473",
        "non_methane_volatile_organic_compounds": "11978587",
        "black_carbon": "946426.44",
        "ammonia": "5384837.5"
    },
    {
        "location": "world",
        "year": "1848",
        "nitrogen": "530917.6",
        "sulpher_dioxide": "3508695",
        "carbon_monoxide": "115689440",
        "organic_carbon": "4270048",
        "non_methane_volatile_organic_compounds": "12051374",
        "black_carbon": "950003.6",
        "ammonia": "5417391.5"
    },
    {
        "location": "world",
        "year": "1849",
        "nitrogen": "544947.5",
        "sulpher_dioxide": "3620232.2",
        "carbon_monoxide": "116648300",
        "organic_carbon": "4311088",
        "non_methane_volatile_organic_compounds": "12136324",
        "black_carbon": "959562.75",
        "ammonia": "5450079.5"
    },
    {
        "location": "world",
        "year": "1850",
        "nitrogen": "565391.1",
        "sulpher_dioxide": "2349580.8",
        "carbon_monoxide": "117768480",
        "organic_carbon": "4361129",
        "non_methane_volatile_organic_compounds": "12227915",
        "black_carbon": "974505.44",
        "ammonia": "5482965.5"
    },
    {
        "location": "world",
        "year": "1851",
        "nitrogen": "572209.5",
        "sulpher_dioxide": "2372425.8",
        "carbon_monoxide": "118167500",
        "organic_carbon": "4399468",
        "non_methane_volatile_organic_compounds": "12289557",
        "black_carbon": "981214.2",
        "ammonia": "5507447"
    },
    {
        "location": "world",
        "year": "1852",
        "nitrogen": "588529.5",
        "sulpher_dioxide": "2442775.2",
        "carbon_monoxide": "118905130",
        "organic_carbon": "4448083.5",
        "non_methane_volatile_organic_compounds": "12372428",
        "black_carbon": "992118.2",
        "ammonia": "5532738"
    },
    {
        "location": "world",
        "year": "1853",
        "nitrogen": "605680.25",
        "sulpher_dioxide": "2515468",
        "carbon_monoxide": "119729920",
        "organic_carbon": "4500227.5",
        "non_methane_volatile_organic_compounds": "12462726",
        "black_carbon": "1004128.06",
        "ammonia": "5558213.5"
    },
    {
        "location": "world",
        "year": "1854",
        "nitrogen": "652283",
        "sulpher_dioxide": "2820843.8",
        "carbon_monoxide": "121319660",
        "organic_carbon": "4571465",
        "non_methane_volatile_organic_compounds": "12586568",
        "black_carbon": "1030079.8",
        "ammonia": "5583882.5"
    },
    {
        "location": "world",
        "year": "1855",
        "nitrogen": "662275.44",
        "sulpher_dioxide": "2859478",
        "carbon_monoxide": "121917240",
        "organic_carbon": "4619105.5",
        "non_methane_volatile_organic_compounds": "12672197",
        "black_carbon": "1038194.25",
        "ammonia": "5609351"
    },
    {
        "location": "world",
        "year": "1856",
        "nitrogen": "691818.6",
        "sulpher_dioxide": "3037721",
        "carbon_monoxide": "122988024",
        "organic_carbon": "4671594",
        "non_methane_volatile_organic_compounds": "12770839",
        "black_carbon": "1051495.9",
        "ammonia": "5635134"
    },
    {
        "location": "world",
        "year": "1857",
        "nitrogen": "705434.56",
        "sulpher_dioxide": "3090080",
        "carbon_monoxide": "123654860",
        "organic_carbon": "4714335.5",
        "non_methane_volatile_organic_compounds": "12851849",
        "black_carbon": "1057154.4",
        "ammonia": "5660897"
    },
    {
        "location": "world",
        "year": "1858",
        "nitrogen": "723345.6",
        "sulpher_dioxide": "3154417",
        "carbon_monoxide": "124372830",
        "organic_carbon": "4758836",
        "non_methane_volatile_organic_compounds": "12937478",
        "black_carbon": "1063124.4",
        "ammonia": "5686848"
    },
    {
        "location": "world",
        "year": "1859",
        "nitrogen": "757586.56",
        "sulpher_dioxide": "3379170.2",
        "carbon_monoxide": "125515010",
        "organic_carbon": "4814328",
        "non_methane_volatile_organic_compounds": "13040285",
        "black_carbon": "1078418.4",
        "ammonia": "5712775.5"
    },
    {
        "location": "world",
        "year": "1860",
        "nitrogen": "804931.94",
        "sulpher_dioxide": "3657556.2",
        "carbon_monoxide": "126857230",
        "organic_carbon": "4873523",
        "non_methane_volatile_organic_compounds": "13159180",
        "black_carbon": "1096423.6",
        "ammonia": "5738799"
    },
    {
        "location": "world",
        "year": "1861",
        "nitrogen": "843286.7",
        "sulpher_dioxide": "3804354",
        "carbon_monoxide": "127622000",
        "organic_carbon": "4910410",
        "non_methane_volatile_organic_compounds": "13242726",
        "black_carbon": "1108836.1",
        "ammonia": "5779882.5"
    },
    {
        "location": "world",
        "year": "1862",
        "nitrogen": "869922.3",
        "sulpher_dioxide": "3858179.8",
        "carbon_monoxide": "128184264",
        "organic_carbon": "4946551.5",
        "non_methane_volatile_organic_compounds": "13320554",
        "black_carbon": "1117044.5",
        "ammonia": "5821126.5"
    },
    {
        "location": "world",
        "year": "1863",
        "nitrogen": "909801.2",
        "sulpher_dioxide": "4128549.8",
        "carbon_monoxide": "129266710",
        "organic_carbon": "4998020",
        "non_methane_volatile_organic_compounds": "13421211",
        "black_carbon": "1136000.2",
        "ammonia": "5863205"
    },
    {
        "location": "world",
        "year": "1864",
        "nitrogen": "955640",
        "sulpher_dioxide": "4416960.5",
        "carbon_monoxide": "130353864",
        "organic_carbon": "5047744",
        "non_methane_volatile_organic_compounds": "13520301",
        "black_carbon": "1155043.1",
        "ammonia": "5904673.5"
    },
    {
        "location": "world",
        "year": "1865",
        "nitrogen": "1004381.44",
        "sulpher_dioxide": "4657180.5",
        "carbon_monoxide": "131352110",
        "organic_carbon": "5095055",
        "non_methane_volatile_organic_compounds": "13620834",
        "black_carbon": "1171148.9",
        "ammonia": "5946282"
    },
    {
        "location": "world",
        "year": "1866",
        "nitrogen": "1042173.5",
        "sulpher_dioxide": "4810483",
        "carbon_monoxide": "132319340",
        "organic_carbon": "5146974",
        "non_methane_volatile_organic_compounds": "13734143",
        "black_carbon": "1181999.2",
        "ammonia": "5988337"
    },
    {
        "location": "world",
        "year": "1867",
        "nitrogen": "1095128",
        "sulpher_dioxide": "5153144.5",
        "carbon_monoxide": "133124000",
        "organic_carbon": "5183981",
        "non_methane_volatile_organic_compounds": "13812499",
        "black_carbon": "1200368.6",
        "ammonia": "6030060"
    },
    {
        "location": "world",
        "year": "1868",
        "nitrogen": "1126964",
        "sulpher_dioxide": "5317851",
        "carbon_monoxide": "133721690",
        "organic_carbon": "5221287",
        "non_methane_volatile_organic_compounds": "13885106",
        "black_carbon": "1211744.4",
        "ammonia": "6070802.5"
    },
    {
        "location": "world",
        "year": "1869",
        "nitrogen": "1185073.5",
        "sulpher_dioxide": "5652218.5",
        "carbon_monoxide": "134865010",
        "organic_carbon": "5274520",
        "non_methane_volatile_organic_compounds": "14005562",
        "black_carbon": "1231031.4",
        "ammonia": "6115619"
    },
    {
        "location": "world",
        "year": "1870",
        "nitrogen": "1224566",
        "sulpher_dioxide": "5820359.5",
        "carbon_monoxide": "136072640",
        "organic_carbon": "5346609.5",
        "non_methane_volatile_organic_compounds": "14166150",
        "black_carbon": "1249707.5",
        "ammonia": "6165440"
    },
    {
        "location": "world",
        "year": "1871",
        "nitrogen": "1306161.9",
        "sulpher_dioxide": "6264533",
        "carbon_monoxide": "137738140",
        "organic_carbon": "5414380.5",
        "non_methane_volatile_organic_compounds": "14358726",
        "black_carbon": "1275479.5",
        "ammonia": "6246464"
    },
    {
        "location": "world",
        "year": "1872",
        "nitrogen": "1411018.9",
        "sulpher_dioxide": "6890327.5",
        "carbon_monoxide": "139448430",
        "organic_carbon": "5466659",
        "non_methane_volatile_organic_compounds": "14519132",
        "black_carbon": "1305758.2",
        "ammonia": "6314426.5"
    },
    {
        "location": "world",
        "year": "1873",
        "nitrogen": "1505714.5",
        "sulpher_dioxide": "7338162",
        "carbon_monoxide": "140703890",
        "organic_carbon": "5505856.5",
        "non_methane_volatile_organic_compounds": "14665505",
        "black_carbon": "1324789.1",
        "ammonia": "6383924.5"
    },
    {
        "location": "world",
        "year": "1874",
        "nitrogen": "1514751",
        "sulpher_dioxide": "7183543",
        "carbon_monoxide": "140570670",
        "organic_carbon": "5513393.5",
        "non_methane_volatile_organic_compounds": "14703716",
        "black_carbon": "1317660.8",
        "ammonia": "6452623"
    },
    {
        "location": "world",
        "year": "1875",
        "nitrogen": "1570350.9",
        "sulpher_dioxide": "7651306",
        "carbon_monoxide": "141534770",
        "organic_carbon": "5540530",
        "non_methane_volatile_organic_compounds": "14806725",
        "black_carbon": "1332088.1",
        "ammonia": "6521515.5"
    },
    {
        "location": "world",
        "year": "1876",
        "nitrogen": "1621123.4",
        "sulpher_dioxide": "7853516.5",
        "carbon_monoxide": "141979410",
        "organic_carbon": "5560892",
        "non_methane_volatile_organic_compounds": "14887917",
        "black_carbon": "1336009.4",
        "ammonia": "6591200"
    },
    {
        "location": "world",
        "year": "1877",
        "nitrogen": "1668635.9",
        "sulpher_dioxide": "8101493",
        "carbon_monoxide": "142776580",
        "organic_carbon": "5589888.5",
        "non_methane_volatile_organic_compounds": "15000518",
        "black_carbon": "1348385.6",
        "ammonia": "6662113"
    },
    {
        "location": "world",
        "year": "1878",
        "nitrogen": "1706747",
        "sulpher_dioxide": "8197098",
        "carbon_monoxide": "143209680",
        "organic_carbon": "5608728",
        "non_methane_volatile_organic_compounds": "15087070",
        "black_carbon": "1352834.5",
        "ammonia": "6733184.5"
    },
    {
        "location": "world",
        "year": "1879",
        "nitrogen": "1811251.5",
        "sulpher_dioxide": "8764574",
        "carbon_monoxide": "144794800",
        "organic_carbon": "5660964.5",
        "non_methane_volatile_organic_compounds": "15262819",
        "black_carbon": "1380949.9",
        "ammonia": "6805530.5"
    },
    {
        "location": "world",
        "year": "1880",
        "nitrogen": "2009649.1",
        "sulpher_dioxide": "9752825",
        "carbon_monoxide": "147191740",
        "organic_carbon": "5726804",
        "non_methane_volatile_organic_compounds": "15510626",
        "black_carbon": "1418041.9",
        "ammonia": "6878901.5"
    },
    {
        "location": "world",
        "year": "1881",
        "nitrogen": "2067457.2",
        "sulpher_dioxide": "10155955",
        "carbon_monoxide": "147955420",
        "organic_carbon": "5746460",
        "non_methane_volatile_organic_compounds": "15604646",
        "black_carbon": "1436960.9",
        "ammonia": "6962522"
    },
    {
        "location": "world",
        "year": "1882",
        "nitrogen": "2166124",
        "sulpher_dioxide": "10715254",
        "carbon_monoxide": "149366580",
        "organic_carbon": "5784003.5",
        "non_methane_volatile_organic_compounds": "15750276",
        "black_carbon": "1465258.1",
        "ammonia": "7047636.5"
    },
    {
        "location": "world",
        "year": "1883",
        "nitrogen": "2248511.8",
        "sulpher_dioxide": "11382924",
        "carbon_monoxide": "150727360",
        "organic_carbon": "5825958.5",
        "non_methane_volatile_organic_compounds": "15855578",
        "black_carbon": "1494899.9",
        "ammonia": "7132088.5"
    },
    {
        "location": "world",
        "year": "1884",
        "nitrogen": "2291182",
        "sulpher_dioxide": "11566893",
        "carbon_monoxide": "151278510",
        "organic_carbon": "5843368.5",
        "non_methane_volatile_organic_compounds": "15942740",
        "black_carbon": "1507007.8",
        "ammonia": "7217346.5"
    },
    {
        "location": "world",
        "year": "1885",
        "nitrogen": "2331447.8",
        "sulpher_dioxide": "11664406",
        "carbon_monoxide": "151612820",
        "organic_carbon": "5855781.5",
        "non_methane_volatile_organic_compounds": "15998560",
        "black_carbon": "1514386",
        "ammonia": "7302948.5"
    },
    {
        "location": "world",
        "year": "1886",
        "nitrogen": "2419837.8",
        "sulpher_dioxide": "11793486",
        "carbon_monoxide": "152225600",
        "organic_carbon": "5871656.5",
        "non_methane_volatile_organic_compounds": "16111741",
        "black_carbon": "1526819.9",
        "ammonia": "7389866"
    },
    {
        "location": "world",
        "year": "1887",
        "nitrogen": "2545684.5",
        "sulpher_dioxide": "12294955",
        "carbon_monoxide": "153360000",
        "organic_carbon": "5901382",
        "non_methane_volatile_organic_compounds": "16251615",
        "black_carbon": "1551057.4",
        "ammonia": "7476750.5"
    },
    {
        "location": "world",
        "year": "1888",
        "nitrogen": "2759966.2",
        "sulpher_dioxide": "13532151",
        "carbon_monoxide": "156030600",
        "organic_carbon": "5970535",
        "non_methane_volatile_organic_compounds": "16491495",
        "black_carbon": "1605975.2",
        "ammonia": "7569664"
    },
    {
        "location": "world",
        "year": "1889",
        "nitrogen": "2821838.2",
        "sulpher_dioxide": "13597330",
        "carbon_monoxide": "156092540",
        "organic_carbon": "5967157.5",
        "non_methane_volatile_organic_compounds": "16586963",
        "black_carbon": "1602975.9",
        "ammonia": "7661283.5"
    },
    {
        "location": "world",
        "year": "1890",
        "nitrogen": "3047314.8",
        "sulpher_dioxide": "14730148",
        "carbon_monoxide": "159056400",
        "organic_carbon": "6034336.5",
        "non_methane_volatile_organic_compounds": "16898296",
        "black_carbon": "1655813.9",
        "ammonia": "7757051"
    },
    {
        "location": "world",
        "year": "1891",
        "nitrogen": "3193376.8",
        "sulpher_dioxide": "15481302",
        "carbon_monoxide": "160740380",
        "organic_carbon": "6067868.5",
        "non_methane_volatile_organic_compounds": "17099160",
        "black_carbon": "1685384.1",
        "ammonia": "7854072.5"
    },
    {
        "location": "world",
        "year": "1892",
        "nitrogen": "3203565",
        "sulpher_dioxide": "15790708",
        "carbon_monoxide": "161366270",
        "organic_carbon": "6081670",
        "non_methane_volatile_organic_compounds": "17168538",
        "black_carbon": "1701162.5",
        "ammonia": "7949762.5"
    },
    {
        "location": "world",
        "year": "1893",
        "nitrogen": "3197066",
        "sulpher_dioxide": "15644941",
        "carbon_monoxide": "161213800",
        "organic_carbon": "6077844.5",
        "non_methane_volatile_organic_compounds": "17207310",
        "black_carbon": "1701512.5",
        "ammonia": "8045912"
    },
    {
        "location": "world",
        "year": "1894",
        "nitrogen": "3307905",
        "sulpher_dioxide": "16254513",
        "carbon_monoxide": "161962180",
        "organic_carbon": "6089822",
        "non_methane_volatile_organic_compounds": "17290298",
        "black_carbon": "1714647.6",
        "ammonia": "8142090"
    },
    {
        "location": "world",
        "year": "1895",
        "nitrogen": "3494462.5",
        "sulpher_dioxide": "17238778",
        "carbon_monoxide": "164300720",
        "organic_carbon": "6141779.5",
        "non_methane_volatile_organic_compounds": "17554928",
        "black_carbon": "1758645.9",
        "ammonia": "8242502"
    },
    {
        "location": "world",
        "year": "1896",
        "nitrogen": "3653038.5",
        "sulpher_dioxide": "17898880",
        "carbon_monoxide": "164842050",
        "organic_carbon": "6156182.5",
        "non_methane_volatile_organic_compounds": "17705396",
        "black_carbon": "1775960.9",
        "ammonia": "8342030"
    },
    {
        "location": "world",
        "year": "1897",
        "nitrogen": "3816396",
        "sulpher_dioxide": "18776402",
        "carbon_monoxide": "165811840",
        "organic_carbon": "6185861",
        "non_methane_volatile_organic_compounds": "17877628",
        "black_carbon": "1804016.2",
        "ammonia": "8441666"
    },
    {
        "location": "world",
        "year": "1898",
        "nitrogen": "3984538.5",
        "sulpher_dioxide": "19868588",
        "carbon_monoxide": "167243820",
        "organic_carbon": "6230519.5",
        "non_methane_volatile_organic_compounds": "18065760",
        "black_carbon": "1841588.4",
        "ammonia": "8542949"
    },
    {
        "location": "world",
        "year": "1899",
        "nitrogen": "4279178.5",
        "sulpher_dioxide": "21683316",
        "carbon_monoxide": "170236590",
        "organic_carbon": "6304184",
        "non_methane_volatile_organic_compounds": "18382770",
        "black_carbon": "1903986.8",
        "ammonia": "8646591"
    },
    {
        "location": "world",
        "year": "1900",
        "nitrogen": "4537598",
        "sulpher_dioxide": "22831068",
        "carbon_monoxide": "172023940",
        "organic_carbon": "6354253.5",
        "non_methane_volatile_organic_compounds": "18677868",
        "black_carbon": "1940372.9",
        "ammonia": "8750968"
    },
    {
        "location": "world",
        "year": "1901",
        "nitrogen": "4769739.5",
        "sulpher_dioxide": "23797102",
        "carbon_monoxide": "173797970",
        "organic_carbon": "6399745",
        "non_methane_volatile_organic_compounds": "19064956",
        "black_carbon": "1972399.9",
        "ammonia": "8870587"
    },
    {
        "location": "world",
        "year": "1902",
        "nitrogen": "4993605",
        "sulpher_dioxide": "24550574",
        "carbon_monoxide": "175500020",
        "organic_carbon": "6427810.5",
        "non_methane_volatile_organic_compounds": "19393516",
        "black_carbon": "1997093.4",
        "ammonia": "8991797"
    },
    {
        "location": "world",
        "year": "1903",
        "nitrogen": "5406806",
        "sulpher_dioxide": "26667442",
        "carbon_monoxide": "180000700",
        "organic_carbon": "6521873.5",
        "non_methane_volatile_organic_compounds": "19970928",
        "black_carbon": "2073099.5",
        "ammonia": "9114304"
    },
    {
        "location": "world",
        "year": "1904",
        "nitrogen": "5649362.5",
        "sulpher_dioxide": "27150964",
        "carbon_monoxide": "180707500",
        "organic_carbon": "6532414.5",
        "non_methane_volatile_organic_compounds": "20286718",
        "black_carbon": "2075570.2",
        "ammonia": "9234954"
    },
    {
        "location": "world",
        "year": "1905",
        "nitrogen": "6002985",
        "sulpher_dioxide": "28887782",
        "carbon_monoxide": "184041660",
        "organic_carbon": "6598469",
        "non_methane_volatile_organic_compounds": "20754108",
        "black_carbon": "2127811.8",
        "ammonia": "9357594"
    },
    {
        "location": "world",
        "year": "1906",
        "nitrogen": "6386456.5",
        "sulpher_dioxide": "30750544",
        "carbon_monoxide": "186822940",
        "organic_carbon": "6693903",
        "non_methane_volatile_organic_compounds": "21180132",
        "black_carbon": "2186551.8",
        "ammonia": "9488702"
    },
    {
        "location": "world",
        "year": "1907",
        "nitrogen": "7144250.5",
        "sulpher_dioxide": "33951120",
        "carbon_monoxide": "193781780",
        "organic_carbon": "6833050",
        "non_methane_volatile_organic_compounds": "22118582",
        "black_carbon": "2290401.8",
        "ammonia": "9628962"
    },
    {
        "location": "world",
        "year": "1908",
        "nitrogen": "7173782.5",
        "sulpher_dioxide": "32614762",
        "carbon_monoxide": "191886180",
        "organic_carbon": "6809443.5",
        "non_methane_volatile_organic_compounds": "22183504",
        "black_carbon": "2244797.5",
        "ammonia": "9757915"
    },
    {
        "location": "world",
        "year": "1909",
        "nitrogen": "7485118",
        "sulpher_dioxide": "34229348",
        "carbon_monoxide": "194298560",
        "organic_carbon": "6880507.5",
        "non_methane_volatile_organic_compounds": "22701924",
        "black_carbon": "2294705",
        "ammonia": "9891951"
    },
    {
        "location": "world",
        "year": "1910",
        "nitrogen": "7904055",
        "sulpher_dioxide": "35792290",
        "carbon_monoxide": "197866100",
        "organic_carbon": "6962242.5",
        "non_methane_volatile_organic_compounds": "23214358",
        "black_carbon": "2346579.5",
        "ammonia": "10029012"
    },
    {
        "location": "world",
        "year": "1911",
        "nitrogen": "8177746.5",
        "sulpher_dioxide": "36266748",
        "carbon_monoxide": "199856180",
        "organic_carbon": "6999476",
        "non_methane_volatile_organic_compounds": "23522376",
        "black_carbon": "2371464.2",
        "ammonia": "10152917"
    },
    {
        "location": "world",
        "year": "1912",
        "nitrogen": "8552263",
        "sulpher_dioxide": "37570744",
        "carbon_monoxide": "203434900",
        "organic_carbon": "7081280.5",
        "non_methane_volatile_organic_compounds": "23923248",
        "black_carbon": "2422023",
        "ammonia": "10276804"
    },
    {
        "location": "world",
        "year": "1913",
        "nitrogen": "9259457",
        "sulpher_dioxide": "39339576",
        "carbon_monoxide": "209391700",
        "organic_carbon": "7181472.5",
        "non_methane_volatile_organic_compounds": "24701216",
        "black_carbon": "2493142.2",
        "ammonia": "10405452"
    },
    {
        "location": "world",
        "year": "1914",
        "nitrogen": "8942133",
        "sulpher_dioxide": "35831520",
        "carbon_monoxide": "203700220",
        "organic_carbon": "7031153",
        "non_methane_volatile_organic_compounds": "24357634",
        "black_carbon": "2378850.8",
        "ammonia": "10523125"
    },
    {
        "location": "world",
        "year": "1915",
        "nitrogen": "9180706",
        "sulpher_dioxide": "35751388",
        "carbon_monoxide": "203691730",
        "organic_carbon": "7015312.5",
        "non_methane_volatile_organic_compounds": "24562168",
        "black_carbon": "2392308",
        "ammonia": "10642607"
    },
    {
        "location": "world",
        "year": "1916",
        "nitrogen": "10012128",
        "sulpher_dioxide": "39019816",
        "carbon_monoxide": "208111700",
        "organic_carbon": "7076306.5",
        "non_methane_volatile_organic_compounds": "25232044",
        "black_carbon": "2475100.2",
        "ammonia": "10769042"
    },
    {
        "location": "world",
        "year": "1917",
        "nitrogen": "10594708",
        "sulpher_dioxide": "40654460",
        "carbon_monoxide": "211168050",
        "organic_carbon": "7095430.5",
        "non_methane_volatile_organic_compounds": "25769264",
        "black_carbon": "2526390.5",
        "ammonia": "10895452"
    },
    {
        "location": "world",
        "year": "1918",
        "nitrogen": "10792927",
        "sulpher_dioxide": "40111070",
        "carbon_monoxide": "210695740",
        "organic_carbon": "7042177",
        "non_methane_volatile_organic_compounds": "25908408",
        "black_carbon": "2510021.8",
        "ammonia": "11021427"
    },
    {
        "location": "world",
        "year": "1919",
        "nitrogen": "10480061",
        "sulpher_dioxide": "34120732",
        "carbon_monoxide": "202128130",
        "organic_carbon": "6763415",
        "non_methane_volatile_organic_compounds": "25537468",
        "black_carbon": "2312948",
        "ammonia": "11139163"
    },
    {
        "location": "world",
        "year": "1920",
        "nitrogen": "11995725",
        "sulpher_dioxide": "38111260",
        "carbon_monoxide": "214272450",
        "organic_carbon": "6943511",
        "non_methane_volatile_organic_compounds": "27022066",
        "black_carbon": "2461499",
        "ammonia": "11282799"
    },
    {
        "location": "world",
        "year": "1921",
        "nitrogen": "11590064",
        "sulpher_dioxide": "32529940",
        "carbon_monoxide": "207204620",
        "organic_carbon": "6804316.5",
        "non_methane_volatile_organic_compounds": "26566746",
        "black_carbon": "2313680.5",
        "ammonia": "11399635"
    },
    {
        "location": "world",
        "year": "1922",
        "nitrogen": "12551027",
        "sulpher_dioxide": "34264940",
        "carbon_monoxide": "213004050",
        "organic_carbon": "6882806.5",
        "non_methane_volatile_organic_compounds": "27536684",
        "black_carbon": "2364096.5",
        "ammonia": "11550973"
    },
    {
        "location": "world",
        "year": "1923",
        "nitrogen": "13830635",
        "sulpher_dioxide": "37583240",
        "carbon_monoxide": "228750200",
        "organic_carbon": "7128559.5",
        "non_methane_volatile_organic_compounds": "29344436",
        "black_carbon": "2588075.5",
        "ammonia": "11729840"
    },
    {
        "location": "world",
        "year": "1924",
        "nitrogen": "14134149",
        "sulpher_dioxide": "37816010",
        "carbon_monoxide": "228995170",
        "organic_carbon": "7191082.5",
        "non_methane_volatile_organic_compounds": "29414042",
        "black_carbon": "2581327.5",
        "ammonia": "11853281"
    },
    {
        "location": "world",
        "year": "1925",
        "nitrogen": "14785317",
        "sulpher_dioxide": "38171710",
        "carbon_monoxide": "231648020",
        "organic_carbon": "7251938",
        "non_methane_volatile_organic_compounds": "30042382",
        "black_carbon": "2604843",
        "ammonia": "12273069"
    },
    {
        "location": "world",
        "year": "1926",
        "nitrogen": "15187936",
        "sulpher_dioxide": "39171580",
        "carbon_monoxide": "231157120",
        "organic_carbon": "7228225",
        "non_methane_volatile_organic_compounds": "30348060",
        "black_carbon": "2581434.8",
        "ammonia": "12591747"
    },
    {
        "location": "world",
        "year": "1927",
        "nitrogen": "16509492",
        "sulpher_dioxide": "41619172",
        "carbon_monoxide": "239188900",
        "organic_carbon": "7319322.5",
        "non_methane_volatile_organic_compounds": "31681954",
        "black_carbon": "2630166",
        "ammonia": "12820962"
    },
    {
        "location": "world",
        "year": "1928",
        "nitrogen": "16918008",
        "sulpher_dioxide": "41755800",
        "carbon_monoxide": "238001630",
        "organic_carbon": "7273468",
        "non_methane_volatile_organic_compounds": "32007558",
        "black_carbon": "2574391",
        "ammonia": "12993303"
    },
    {
        "location": "world",
        "year": "1929",
        "nitrogen": "18293878",
        "sulpher_dioxide": "44708188",
        "carbon_monoxide": "245259250",
        "organic_carbon": "7349545",
        "non_methane_volatile_organic_compounds": "33363470",
        "black_carbon": "2624802.5",
        "ammonia": "13147520"
    },
    {
        "location": "world",
        "year": "1930",
        "nitrogen": "17156372",
        "sulpher_dioxide": "41223172",
        "carbon_monoxide": "234966670",
        "organic_carbon": "7150367",
        "non_methane_volatile_organic_compounds": "32472090",
        "black_carbon": "2482765",
        "ammonia": "13177606"
    },
    {
        "location": "world",
        "year": "1931",
        "nitrogen": "16101932",
        "sulpher_dioxide": "36504972",
        "carbon_monoxide": "227358580",
        "organic_carbon": "7029604.5",
        "non_methane_volatile_organic_compounds": "31660296",
        "black_carbon": "2368775.2",
        "ammonia": "13277972"
    },
    {
        "location": "world",
        "year": "1932",
        "nitrogen": "15107391",
        "sulpher_dioxide": "32253814",
        "carbon_monoxide": "220332290",
        "organic_carbon": "6926116",
        "non_methane_volatile_organic_compounds": "30872464",
        "black_carbon": "2268235.2",
        "ammonia": "13305085"
    },
    {
        "location": "world",
        "year": "1933",
        "nitrogen": "15857861",
        "sulpher_dioxide": "34183370",
        "carbon_monoxide": "226245890",
        "organic_carbon": "6998977.5",
        "non_methane_volatile_organic_compounds": "31943662",
        "black_carbon": "2312392",
        "ammonia": "13361013"
    },
    {
        "location": "world",
        "year": "1934",
        "nitrogen": "16780316",
        "sulpher_dioxide": "37778172",
        "carbon_monoxide": "231136530",
        "organic_carbon": "7113621.5",
        "non_methane_volatile_organic_compounds": "32729220",
        "black_carbon": "2390802.2",
        "ammonia": "13395259"
    },
    {
        "location": "world",
        "year": "1935",
        "nitrogen": "17795102",
        "sulpher_dioxide": "40940504",
        "carbon_monoxide": "236673840",
        "organic_carbon": "7195746.5",
        "non_methane_volatile_organic_compounds": "33713200",
        "black_carbon": "2440801.5",
        "ammonia": "13437737"
    },
    {
        "location": "world",
        "year": "1936",
        "nitrogen": "19294148",
        "sulpher_dioxide": "43932188",
        "carbon_monoxide": "245037700",
        "organic_carbon": "7327696",
        "non_methane_volatile_organic_compounds": "35187150",
        "black_carbon": "2534776.5",
        "ammonia": "13649740"
    },
    {
        "location": "world",
        "year": "1937",
        "nitrogen": "20868710",
        "sulpher_dioxide": "47483184",
        "carbon_monoxide": "254394340",
        "organic_carbon": "7446372",
        "non_methane_volatile_organic_compounds": "36900640",
        "black_carbon": "2600102",
        "ammonia": "13843268"
    },
    {
        "location": "world",
        "year": "1938",
        "nitrogen": "19887960",
        "sulpher_dioxide": "44310444",
        "carbon_monoxide": "248006050",
        "organic_carbon": "7377826",
        "non_methane_volatile_organic_compounds": "36258370",
        "black_carbon": "2509484",
        "ammonia": "13965691"
    },
    {
        "location": "world",
        "year": "1939",
        "nitrogen": "21067240",
        "sulpher_dioxide": "47281996",
        "carbon_monoxide": "253873070",
        "organic_carbon": "7485346.5",
        "non_methane_volatile_organic_compounds": "37363316",
        "black_carbon": "2574393.5",
        "ammonia": "14092466"
    },
    {
        "location": "world",
        "year": "1940",
        "nitrogen": "22905572",
        "sulpher_dioxide": "52443910",
        "carbon_monoxide": "261749950",
        "organic_carbon": "7621276.5",
        "non_methane_volatile_organic_compounds": "38575210",
        "black_carbon": "2667191.8",
        "ammonia": "14202288"
    },
    {
        "location": "world",
        "year": "1941",
        "nitrogen": "23692878",
        "sulpher_dioxide": "54377844",
        "carbon_monoxide": "266406420",
        "organic_carbon": "7680842",
        "non_methane_volatile_organic_compounds": "39071630",
        "black_carbon": "2730359.5",
        "ammonia": "14317774"
    },
    {
        "location": "world",
        "year": "1942",
        "nitrogen": "23670068",
        "sulpher_dioxide": "55494320",
        "carbon_monoxide": "265400910",
        "organic_carbon": "7720357",
        "non_methane_volatile_organic_compounds": "38770836",
        "black_carbon": "2773501.8",
        "ammonia": "14355770"
    },
    {
        "location": "world",
        "year": "1943",
        "nitrogen": "24863502",
        "sulpher_dioxide": "56618772",
        "carbon_monoxide": "270248200",
        "organic_carbon": "7772789.5",
        "non_methane_volatile_organic_compounds": "39960040",
        "black_carbon": "2804978.5",
        "ammonia": "14462418"
    },
    {
        "location": "world",
        "year": "1944",
        "nitrogen": "26098072",
        "sulpher_dioxide": "55191856",
        "carbon_monoxide": "274774240",
        "organic_carbon": "7706702.5",
        "non_methane_volatile_organic_compounds": "41248800",
        "black_carbon": "2788323.8",
        "ammonia": "14611416"
    },
    {
        "location": "world",
        "year": "1945",
        "nitrogen": "24790870",
        "sulpher_dioxide": "47722820",
        "carbon_monoxide": "264161250",
        "organic_carbon": "7322845.5",
        "non_methane_volatile_organic_compounds": "40415116",
        "black_carbon": "2539978.8",
        "ammonia": "14718767"
    },
    {
        "location": "world",
        "year": "1946",
        "nitrogen": "25730728",
        "sulpher_dioxide": "47084804",
        "carbon_monoxide": "268096140",
        "organic_carbon": "7410240.5",
        "non_methane_volatile_organic_compounds": "41161350",
        "black_carbon": "2576655",
        "ammonia": "14965052"
    },
    {
        "location": "world",
        "year": "1947",
        "nitrogen": "27827238",
        "sulpher_dioxide": "52578504",
        "carbon_monoxide": "271278750",
        "organic_carbon": "7271605",
        "non_methane_volatile_organic_compounds": "42406748",
        "black_carbon": "2554416.2",
        "ammonia": "15230772"
    },
    {
        "location": "world",
        "year": "1948",
        "nitrogen": "29766908",
        "sulpher_dioxide": "55133900",
        "carbon_monoxide": "280765950",
        "organic_carbon": "7336554.5",
        "non_methane_volatile_organic_compounds": "44672150",
        "black_carbon": "2566766",
        "ammonia": "15548912"
    },
    {
        "location": "world",
        "year": "1949",
        "nitrogen": "28882892",
        "sulpher_dioxide": "52350400",
        "carbon_monoxide": "279936960",
        "organic_carbon": "7523059.5",
        "non_methane_volatile_organic_compounds": "44263244",
        "black_carbon": "2668069.5",
        "ammonia": "15930534"
    },
    {
        "location": "world",
        "year": "1950",
        "nitrogen": "31540526",
        "sulpher_dioxide": "56139096",
        "carbon_monoxide": "292086720",
        "organic_carbon": "7614549.5",
        "non_methane_volatile_organic_compounds": "47391596",
        "black_carbon": "2702673.2",
        "ammonia": "16371157"
    },
    {
        "location": "world",
        "year": "1951",
        "nitrogen": "33406246",
        "sulpher_dioxide": "59797260",
        "carbon_monoxide": "301310050",
        "organic_carbon": "7708116.5",
        "non_methane_volatile_organic_compounds": "49785664",
        "black_carbon": "2745808",
        "ammonia": "16993382"
    },
    {
        "location": "world",
        "year": "1952",
        "nitrogen": "34581730",
        "sulpher_dioxide": "61524484",
        "carbon_monoxide": "305017400",
        "organic_carbon": "7740483.5",
        "non_methane_volatile_organic_compounds": "51017588",
        "black_carbon": "2760322",
        "ammonia": "17543566"
    },
    {
        "location": "world",
        "year": "1953",
        "nitrogen": "35797944",
        "sulpher_dioxide": "62540804",
        "carbon_monoxide": "309452860",
        "organic_carbon": "7749033.5",
        "non_methane_volatile_organic_compounds": "52469916",
        "black_carbon": "2759105",
        "ammonia": "18103892"
    },
    {
        "location": "world",
        "year": "1954",
        "nitrogen": "36733076",
        "sulpher_dioxide": "64217516",
        "carbon_monoxide": "312982900",
        "organic_carbon": "7807157.5",
        "non_methane_volatile_organic_compounds": "53756836",
        "black_carbon": "2795923",
        "ammonia": "18563154"
    },
    {
        "location": "world",
        "year": "1955",
        "nitrogen": "40032316",
        "sulpher_dioxide": "70005580",
        "carbon_monoxide": "325987650",
        "organic_carbon": "7935636.5",
        "non_methane_volatile_organic_compounds": "57269212",
        "black_carbon": "2892954.5",
        "ammonia": "18966026"
    },
    {
        "location": "world",
        "year": "1956",
        "nitrogen": "42327936",
        "sulpher_dioxide": "74860640",
        "carbon_monoxide": "334810900",
        "organic_carbon": "8057824.5",
        "non_methane_volatile_organic_compounds": "59743990",
        "black_carbon": "3029215.2",
        "ammonia": "19391784"
    },
    {
        "location": "world",
        "year": "1957",
        "nitrogen": "43724332",
        "sulpher_dioxide": "77293110",
        "carbon_monoxide": "336245600",
        "organic_carbon": "8094772.5",
        "non_methane_volatile_organic_compounds": "61050976",
        "black_carbon": "3103009",
        "ammonia": "19872624"
    },
    {
        "location": "world",
        "year": "1958",
        "nitrogen": "44499084",
        "sulpher_dioxide": "79369416",
        "carbon_monoxide": "344420640",
        "organic_carbon": "8216680",
        "non_methane_volatile_organic_compounds": "62475076",
        "black_carbon": "3264110",
        "ammonia": "20476406"
    },
    {
        "location": "world",
        "year": "1959",
        "nitrogen": "46268216",
        "sulpher_dioxide": "83217976",
        "carbon_monoxide": "354607650",
        "organic_carbon": "8295150",
        "non_methane_volatile_organic_compounds": "65090590",
        "black_carbon": "3402097.8",
        "ammonia": "21091466"
    },
    {
        "location": "world",
        "year": "1960",
        "nitrogen": "49128224",
        "sulpher_dioxide": "88251784",
        "carbon_monoxide": "361599900",
        "organic_carbon": "8437233",
        "non_methane_volatile_organic_compounds": "68014690",
        "black_carbon": "3547865.2",
        "ammonia": "21528920"
    },
    {
        "location": "world",
        "year": "1961",
        "nitrogen": "50742500",
        "sulpher_dioxide": "89437360",
        "carbon_monoxide": "360211680",
        "organic_carbon": "8348733.5",
        "non_methane_volatile_organic_compounds": "69470670",
        "black_carbon": "3463853.5",
        "ammonia": "21976352"
    },
    {
        "location": "world",
        "year": "1962",
        "nitrogen": "52812436",
        "sulpher_dioxide": "92294140",
        "carbon_monoxide": "367985730",
        "organic_carbon": "8396573",
        "non_methane_volatile_organic_compounds": "72137140",
        "black_carbon": "3490389",
        "ammonia": "22758488"
    },
    {
        "location": "world",
        "year": "1963",
        "nitrogen": "55987640",
        "sulpher_dioxide": "95480120",
        "carbon_monoxide": "379170430",
        "organic_carbon": "8486780",
        "non_methane_volatile_organic_compounds": "75237350",
        "black_carbon": "3549132.8",
        "ammonia": "23662902"
    },
    {
        "location": "world",
        "year": "1964",
        "nitrogen": "59543196",
        "sulpher_dioxide": "100435920",
        "carbon_monoxide": "386648420",
        "organic_carbon": "8474354",
        "non_methane_volatile_organic_compounds": "78389670",
        "black_carbon": "3549346.8",
        "ammonia": "24190674"
    },
    {
        "location": "world",
        "year": "1965",
        "nitrogen": "62419200",
        "sulpher_dioxide": "103309176",
        "carbon_monoxide": "397295970",
        "organic_carbon": "8490218",
        "non_methane_volatile_organic_compounds": "81782220",
        "black_carbon": "3573355.8",
        "ammonia": "25592012"
    },
    {
        "location": "world",
        "year": "1966",
        "nitrogen": "64767156",
        "sulpher_dioxide": "106137010",
        "carbon_monoxide": "409182000",
        "organic_carbon": "8477126",
        "non_methane_volatile_organic_compounds": "85577510",
        "black_carbon": "3604080",
        "ammonia": "27372288"
    },
    {
        "location": "world",
        "year": "1967",
        "nitrogen": "68043544",
        "sulpher_dioxide": "106799080",
        "carbon_monoxide": "416320830",
        "organic_carbon": "8403496",
        "non_methane_volatile_organic_compounds": "88398530",
        "black_carbon": "3585070.5",
        "ammonia": "28789866"
    },
    {
        "location": "world",
        "year": "1968",
        "nitrogen": "72958520",
        "sulpher_dioxide": "111810650",
        "carbon_monoxide": "436452640",
        "organic_carbon": "8459983",
        "non_methane_volatile_organic_compounds": "93542070",
        "black_carbon": "3691818.2",
        "ammonia": "30290682"
    },
    {
        "location": "world",
        "year": "1969",
        "nitrogen": "75122700",
        "sulpher_dioxide": "116486210",
        "carbon_monoxide": "456281800",
        "organic_carbon": "8544008",
        "non_methane_volatile_organic_compounds": "98362780",
        "black_carbon": "3790562",
        "ammonia": "31108172"
    },
    {
        "location": "world",
        "year": "1970",
        "nitrogen": "80182880",
        "sulpher_dioxide": "124129580",
        "carbon_monoxide": "480065470",
        "organic_carbon": "8660430",
        "non_methane_volatile_organic_compounds": "105316650",
        "black_carbon": "3903085.5",
        "ammonia": "33820896"
    },
    {
        "location": "world",
        "year": "1971",
        "nitrogen": "82780340",
        "sulpher_dioxide": "124511130",
        "carbon_monoxide": "486772960",
        "organic_carbon": "8772561",
        "non_methane_volatile_organic_compounds": "106946830",
        "black_carbon": "4023887",
        "ammonia": "34603136"
    },
    {
        "location": "world",
        "year": "1972",
        "nitrogen": "86449784",
        "sulpher_dioxide": "127945190",
        "carbon_monoxide": "498832960",
        "organic_carbon": "8873063",
        "non_methane_volatile_organic_compounds": "110141300",
        "black_carbon": "4137189.8",
        "ammonia": "35256620"
    },
    {
        "location": "world",
        "year": "1973",
        "nitrogen": "91486280",
        "sulpher_dioxide": "134238240",
        "carbon_monoxide": "509735580",
        "organic_carbon": "8985027",
        "non_methane_volatile_organic_compounds": "113647660",
        "black_carbon": "4269727.5",
        "ammonia": "35979532"
    },
    {
        "location": "world",
        "year": "1974",
        "nitrogen": "90390110",
        "sulpher_dioxide": "132411550",
        "carbon_monoxide": "504363140",
        "organic_carbon": "9062640",
        "non_methane_volatile_organic_compounds": "112612520",
        "black_carbon": "4293698",
        "ammonia": "36631144"
    },
    {
        "location": "world",
        "year": "1975",
        "nitrogen": "89880410",
        "sulpher_dioxide": "130736456",
        "carbon_monoxide": "513556860",
        "organic_carbon": "9257644",
        "non_methane_volatile_organic_compounds": "111493180",
        "black_carbon": "4393768",
        "ammonia": "37569804"
    },
    {
        "location": "world",
        "year": "1976",
        "nitrogen": "93961840",
        "sulpher_dioxide": "136609250",
        "carbon_monoxide": "526331360",
        "organic_carbon": "9440394",
        "non_methane_volatile_organic_compounds": "115180856",
        "black_carbon": "4560931.5",
        "ammonia": "38243844"
    },
    {
        "location": "world",
        "year": "1977",
        "nitrogen": "96783896",
        "sulpher_dioxide": "137497970",
        "carbon_monoxide": "540423100",
        "organic_carbon": "9634553",
        "non_methane_volatile_organic_compounds": "117662730",
        "black_carbon": "4715407",
        "ammonia": "38979720"
    },
    {
        "location": "world",
        "year": "1978",
        "nitrogen": "99147870",
        "sulpher_dioxide": "138320690",
        "carbon_monoxide": "557482100",
        "organic_carbon": "9822070",
        "non_methane_volatile_organic_compounds": "119763230",
        "black_carbon": "4858219",
        "ammonia": "39903056"
    },
    {
        "location": "world",
        "year": "1979",
        "nitrogen": "101656240",
        "sulpher_dioxide": "141003730",
        "carbon_monoxide": "560816800",
        "organic_carbon": "10030373",
        "non_methane_volatile_organic_compounds": "121919880",
        "black_carbon": "4944429",
        "ammonia": "40788588"
    },
    {
        "location": "world",
        "year": "1980",
        "nitrogen": "100580060",
        "sulpher_dioxide": "140288030",
        "carbon_monoxide": "553502700",
        "organic_carbon": "10067140",
        "non_methane_volatile_organic_compounds": "119751290",
        "black_carbon": "4844996",
        "ammonia": "41448570"
    },
    {
        "location": "world",
        "year": "1981",
        "nitrogen": "98605340",
        "sulpher_dioxide": "135794850",
        "carbon_monoxide": "551087400",
        "organic_carbon": "10134106",
        "non_methane_volatile_organic_compounds": "116955330",
        "black_carbon": "4778810",
        "ammonia": "41941984"
    },
    {
        "location": "world",
        "year": "1982",
        "nitrogen": "96245320",
        "sulpher_dioxide": "132663144",
        "carbon_monoxide": "553113340",
        "organic_carbon": "10243799",
        "non_methane_volatile_organic_compounds": "115196870",
        "black_carbon": "4766940",
        "ammonia": "42304744"
    },
    {
        "location": "world",
        "year": "1983",
        "nitrogen": "96134936",
        "sulpher_dioxide": "130619860",
        "carbon_monoxide": "556647800",
        "organic_carbon": "10378018",
        "non_methane_volatile_organic_compounds": "114445990",
        "black_carbon": "4826082",
        "ammonia": "42950696"
    },
    {
        "location": "world",
        "year": "1984",
        "nitrogen": "98691630",
        "sulpher_dioxide": "131849480",
        "carbon_monoxide": "565672700",
        "organic_carbon": "10571656",
        "non_methane_volatile_organic_compounds": "115545976",
        "black_carbon": "4950319",
        "ammonia": "43779380"
    },
    {
        "location": "world",
        "year": "1985",
        "nitrogen": "100142420",
        "sulpher_dioxide": "132363224",
        "carbon_monoxide": "577940860",
        "organic_carbon": "10700295",
        "non_methane_volatile_organic_compounds": "114989290",
        "black_carbon": "4992258.5",
        "ammonia": "44354452"
    },
    {
        "location": "world",
        "year": "1986",
        "nitrogen": "102530770",
        "sulpher_dioxide": "131558056",
        "carbon_monoxide": "582147200",
        "organic_carbon": "10846713",
        "non_methane_volatile_organic_compounds": "116893590",
        "black_carbon": "5120963.5",
        "ammonia": "45114264"
    },
    {
        "location": "world",
        "year": "1987",
        "nitrogen": "106120104",
        "sulpher_dioxide": "134189930",
        "carbon_monoxide": "591236540",
        "organic_carbon": "11089482",
        "non_methane_volatile_organic_compounds": "118697340",
        "black_carbon": "5235796.5",
        "ammonia": "45766492"
    },
    {
        "location": "world",
        "year": "1988",
        "nitrogen": "109845520",
        "sulpher_dioxide": "135298300",
        "carbon_monoxide": "600074500",
        "organic_carbon": "11257423",
        "non_methane_volatile_organic_compounds": "121231550",
        "black_carbon": "5379225",
        "ammonia": "46289436"
    },
    {
        "location": "world",
        "year": "1989",
        "nitrogen": "112365176",
        "sulpher_dioxide": "134940130",
        "carbon_monoxide": "600791600",
        "organic_carbon": "11425519",
        "non_methane_volatile_organic_compounds": "122433130",
        "black_carbon": "5463202",
        "ammonia": "47032520"
    },
    {
        "location": "world",
        "year": "1990",
        "nitrogen": "112989816",
        "sulpher_dioxide": "135486910",
        "carbon_monoxide": "594294800",
        "organic_carbon": "11558079",
        "non_methane_volatile_organic_compounds": "123221700",
        "black_carbon": "5590198.5",
        "ammonia": "47227252"
    },
    {
        "location": "world",
        "year": "1991",
        "nitrogen": "113508130",
        "sulpher_dioxide": "132928710",
        "carbon_monoxide": "591485630",
        "organic_carbon": "11691899",
        "non_methane_volatile_organic_compounds": "123388020",
        "black_carbon": "5615332",
        "ammonia": "47290532"
    },
    {
        "location": "world",
        "year": "1992",
        "nitrogen": "113892470",
        "sulpher_dioxide": "128397470",
        "carbon_monoxide": "585476860",
        "organic_carbon": "11697415",
        "non_methane_volatile_organic_compounds": "123638670",
        "black_carbon": "5504124.5",
        "ammonia": "47432924"
    },
    {
        "location": "world",
        "year": "1993",
        "nitrogen": "114889580",
        "sulpher_dioxide": "126380070",
        "carbon_monoxide": "585717900",
        "organic_carbon": "11643529",
        "non_methane_volatile_organic_compounds": "124413784",
        "black_carbon": "5555071",
        "ammonia": "47685980"
    },
    {
        "location": "world",
        "year": "1994",
        "nitrogen": "114800024",
        "sulpher_dioxide": "123285240",
        "carbon_monoxide": "575773760",
        "organic_carbon": "11677189",
        "non_methane_volatile_organic_compounds": "123776660",
        "black_carbon": "5635904.5",
        "ammonia": "48083390"
    },
    {
        "location": "world",
        "year": "1995",
        "nitrogen": "116372136",
        "sulpher_dioxide": "120811630",
        "carbon_monoxide": "579283200",
        "organic_carbon": "11872881",
        "non_methane_volatile_organic_compounds": "125207310",
        "black_carbon": "5830334",
        "ammonia": "48298932"
    },
    {
        "location": "world",
        "year": "1996",
        "nitrogen": "117457920",
        "sulpher_dioxide": "117479736",
        "carbon_monoxide": "567415230",
        "organic_carbon": "11939882",
        "non_methane_volatile_organic_compounds": "124053544",
        "black_carbon": "5759763",
        "ammonia": "48775780"
    },
    {
        "location": "world",
        "year": "1997",
        "nitrogen": "118230090",
        "sulpher_dioxide": "117210264",
        "carbon_monoxide": "570551900",
        "organic_carbon": "12092682",
        "non_methane_volatile_organic_compounds": "125149464",
        "black_carbon": "5821153",
        "ammonia": "49253416"
    },
    {
        "location": "world",
        "year": "1998",
        "nitrogen": "117673250",
        "sulpher_dioxide": "113979830",
        "carbon_monoxide": "562204300",
        "organic_carbon": "11973640",
        "non_methane_volatile_organic_compounds": "124544910",
        "black_carbon": "5560450",
        "ammonia": "49742330"
    },
    {
        "location": "world",
        "year": "1999",
        "nitrogen": "116325576",
        "sulpher_dioxide": "108479180",
        "carbon_monoxide": "551991600",
        "organic_carbon": "12071815",
        "non_methane_volatile_organic_compounds": "123679544",
        "black_carbon": "5461918.5",
        "ammonia": "50129296"
    },
    {
        "location": "world",
        "year": "2000",
        "nitrogen": "118712640",
        "sulpher_dioxide": "107800536",
        "carbon_monoxide": "554078200",
        "organic_carbon": "11992801",
        "non_methane_volatile_organic_compounds": "124600360",
        "black_carbon": "5328567.5",
        "ammonia": "50585396"
    },
    {
        "location": "world",
        "year": "2001",
        "nitrogen": "118295380",
        "sulpher_dioxide": "108487280",
        "carbon_monoxide": "546182500",
        "organic_carbon": "12000896",
        "non_methane_volatile_organic_compounds": "124303730",
        "black_carbon": "5375764",
        "ammonia": "50686120"
    },
    {
        "location": "world",
        "year": "2002",
        "nitrogen": "118512860",
        "sulpher_dioxide": "107364660",
        "carbon_monoxide": "530964930",
        "organic_carbon": "12158292",
        "non_methane_volatile_organic_compounds": "124297416",
        "black_carbon": "5423700",
        "ammonia": "51131772"
    },
    {
        "location": "world",
        "year": "2003",
        "nitrogen": "121921500",
        "sulpher_dioxide": "111728190",
        "carbon_monoxide": "536821570",
        "organic_carbon": "12409411",
        "non_methane_volatile_organic_compounds": "125826370",
        "black_carbon": "5551651.5",
        "ammonia": "51763450"
    },
    {
        "location": "world",
        "year": "2004",
        "nitrogen": "126374130",
        "sulpher_dioxide": "117096240",
        "carbon_monoxide": "543509760",
        "organic_carbon": "12672495",
        "non_methane_volatile_organic_compounds": "128919944",
        "black_carbon": "5748066",
        "ammonia": "52623812"
    },
    {
        "location": "world",
        "year": "2005",
        "nitrogen": "129247750",
        "sulpher_dioxide": "122964616",
        "carbon_monoxide": "547655360",
        "organic_carbon": "12893154",
        "non_methane_volatile_organic_compounds": "131000870",
        "black_carbon": "5879113.5",
        "ammonia": "53432108"
    },
    {
        "location": "world",
        "year": "2006",
        "nitrogen": "132362136",
        "sulpher_dioxide": "123619224",
        "carbon_monoxide": "547772740",
        "organic_carbon": "13100058",
        "non_methane_volatile_organic_compounds": "131518296",
        "black_carbon": "5965983.5",
        "ammonia": "54446524"
    },
    {
        "location": "world",
        "year": "2007",
        "nitrogen": "135931500",
        "sulpher_dioxide": "122383120",
        "carbon_monoxide": "544460700",
        "organic_carbon": "13204969",
        "non_methane_volatile_organic_compounds": "131620540",
        "black_carbon": "6034392.5",
        "ammonia": "55686696"
    },
    {
        "location": "world",
        "year": "2008",
        "nitrogen": "136163920",
        "sulpher_dioxide": "118846400",
        "carbon_monoxide": "533566180",
        "organic_carbon": "13388799",
        "non_methane_volatile_organic_compounds": "131752850",
        "black_carbon": "6124767.5",
        "ammonia": "55986532"
    },
    {
        "location": "world",
        "year": "2009",
        "nitrogen": "128155310",
        "sulpher_dioxide": "109399976",
        "carbon_monoxide": "526585060",
        "organic_carbon": "13470208",
        "non_methane_volatile_organic_compounds": "129875016",
        "black_carbon": "6106062",
        "ammonia": "56151356"
    },
    {
        "location": "world",
        "year": "2010",
        "nitrogen": "127496340",
        "sulpher_dioxide": "105690750",
        "carbon_monoxide": "526508700",
        "organic_carbon": "13680806",
        "non_methane_volatile_organic_compounds": "132721220",
        "black_carbon": "6186523.5",
        "ammonia": "57054176"
    },
    {
        "location": "world",
        "year": "2011",
        "nitrogen": "132310000",
        "sulpher_dioxide": "109038296",
        "carbon_monoxide": "522520450",
        "organic_carbon": "13558322",
        "non_methane_volatile_organic_compounds": "134290400",
        "black_carbon": "6139220.5",
        "ammonia": "57966384"
    },
    {
        "location": "world",
        "year": "2012",
        "nitrogen": "131314104",
        "sulpher_dioxide": "105987690",
        "carbon_monoxide": "520254370",
        "organic_carbon": "13500804",
        "non_methane_volatile_organic_compounds": "136929300",
        "black_carbon": "6224275",
        "ammonia": "58832116"
    },
    {
        "location": "world",
        "year": "2013",
        "nitrogen": "129140320",
        "sulpher_dioxide": "101403170",
        "carbon_monoxide": "518939070",
        "organic_carbon": "13547134",
        "non_methane_volatile_organic_compounds": "136970980",
        "black_carbon": "6134634.5",
        "ammonia": "59389748"
    },
    {
        "location": "world",
        "year": "2014",
        "nitrogen": "126719810",
        "sulpher_dioxide": "96665200",
        "carbon_monoxide": "504707460",
        "organic_carbon": "13490909",
        "non_methane_volatile_organic_compounds": "137922700",
        "black_carbon": "6009164.5",
        "ammonia": "59722860"
    },
    {
        "location": "world",
        "year": "2015",
        "nitrogen": "125125190",
        "sulpher_dioxide": "91236510",
        "carbon_monoxide": "492395040",
        "organic_carbon": "13338598",
        "non_methane_volatile_organic_compounds": "137329920",
        "black_carbon": "5837880",
        "ammonia": "60085684"
    },
    {
        "location": "world",
        "year": "2016",
        "nitrogen": "123683470",
        "sulpher_dioxide": "87832770",
        "carbon_monoxide": "474641060",
        "organic_carbon": "13317361",
        "non_methane_volatile_organic_compounds": "137546260",
        "black_carbon": "5717074.5",
        "ammonia": "61054676"
    },
    {
        "location": "world",
        "year": "2017",
        "nitrogen": "123489610",
        "sulpher_dioxide": "84854620",
        "carbon_monoxide": "468139500",
        "organic_carbon": "13370068",
        "non_methane_volatile_organic_compounds": "138751940",
        "black_carbon": "5725901",
        "ammonia": "61386068"
    },
    {
        "location": "world",
        "year": "2018",
        "nitrogen": "122251030",
        "sulpher_dioxide": "83258850",
        "carbon_monoxide": "456801060",
        "organic_carbon": "13239110",
        "non_methane_volatile_organic_compounds": "138128140",
        "black_carbon": "5632701",
        "ammonia": "62020964"
    },
    {
        "location": "world",
        "year": "2019",
        "nitrogen": "119787070",
        "sulpher_dioxide": "81435150",
        "carbon_monoxide": "444817340",
        "organic_carbon": "13105488",
        "non_methane_volatile_organic_compounds": "136776340",
        "black_carbon": "5505723",
        "ammonia": "62540650"
    },
    {
        "location": "world",
        "year": "2020",
        "nitrogen": "109981600",
        "sulpher_dioxide": "69563336",
        "carbon_monoxide": "429021280",
        "organic_carbon": "12962218",
        "non_methane_volatile_organic_compounds": "134215970",
        "black_carbon": "5305236",
        "ammonia": "62931108"
    },
    {
        "location": "world",
        "year": "2021",
        "nitrogen": "113420800",
        "sulpher_dioxide": "72359976",
        "carbon_monoxide": "429536740",
        "organic_carbon": "13053429",
        "non_methane_volatile_organic_compounds": "134515180",
        "black_carbon": "5361625.5",
        "ammonia": "63475340"
    },
    {
        "location": "world",
        "year": "2022",
        "nitrogen": "113397130",
        "sulpher_dioxide": "73466960",
        "carbon_monoxide": "424731040",
        "organic_carbon": "12977442",
        "non_methane_volatile_organic_compounds": "133977910",
        "black_carbon": "5333697",
        "ammonia": "64004636"
    }
]