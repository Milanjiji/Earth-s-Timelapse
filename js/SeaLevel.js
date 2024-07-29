
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('mySlider');

    const maximum = Math.max(...Object.values(SeaLevel).map(({value}) => parseFloat(value)));
    const minimun = Math.min(...Object.values(SeaLevel).map(({value}) => parseFloat(value)));
    const one = (maximum - minimun) / 100

    const value_chart = document.querySelector('.value_chart10')
    const value_box = document.querySelector('.value-box10')
    const value_number = document.querySelector('.value_number10')
    slider.addEventListener('input', function() {
        sliderValue = slider.value;

        if(sliderValue >= 1880 && sliderValue <= 2009){
            value_box.style.opacity = 1;

            var releventData = SeaLevel.filter(data => (data.year) == sliderValue)
            var value = releventData[0].value;
            // value = Math.floor(value * 100) / 100;
            value_number.innerText = value
            const percent = parseInt((value - minimun)/one)

            value_chart.style.width =percent + "%";

        }else if(sliderValue < 1880){
            value_box.style.opacity = 0.5;
            value_chart.style.width =1 + "%";
            value_number.innerText = minimun
        }
    });
});



const SeaLevel = [
    {
        "location": "world",
        "year": "1880",
        "value": "-183.31406"
    },
    {
        "location": "world",
        "year": "1880",
        "value": "-183.24739"
    },
    {
        "location": "world",
        "year": "1880",
        "value": "-174.1474"
    },
    {
        "location": "world",
        "year": "1881",
        "value": "-159.68073"
    },
    {
        "location": "world",
        "year": "1881",
        "value": "-172.41406"
    },
    {
        "location": "world",
        "year": "1881",
        "value": "-174.01407"
    },
    {
        "location": "world",
        "year": "1881",
        "value": "-186.0474"
    },
    {
        "location": "world",
        "year": "1882",
        "value": "-189.48073"
    },
    {
        "location": "world",
        "year": "1882",
        "value": "-184.21407"
    },
    {
        "location": "world",
        "year": "1882",
        "value": "-190.08073"
    },
    {
        "location": "world",
        "year": "1882",
        "value": "-202.5474"
    },
    {
        "location": "world",
        "year": "1883",
        "value": "-204.38072"
    },
    {
        "location": "world",
        "year": "1883",
        "value": "-192.48073"
    },
    {
        "location": "world",
        "year": "1883",
        "value": "-185.1474"
    },
    {
        "location": "world",
        "year": "1883",
        "value": "-179.81406"
    },
    {
        "location": "world",
        "year": "1884",
        "value": "-166.61406"
    },
    {
        "location": "world",
        "year": "1884",
        "value": "-158.98073"
    },
    {
        "location": "world",
        "year": "1884",
        "value": "-166.28073"
    },
    {
        "location": "world",
        "year": "1884",
        "value": "-174.51407"
    },
    {
        "location": "world",
        "year": "1885",
        "value": "-173.3474"
    },
    {
        "location": "world",
        "year": "1885",
        "value": "-166.61406"
    },
    {
        "location": "world",
        "year": "1885",
        "value": "-167.68073"
    },
    {
        "location": "world",
        "year": "1885",
        "value": "-166.58073"
    },
    {
        "location": "world",
        "year": "1886",
        "value": "-171.11406"
    },
    {
        "location": "world",
        "year": "1886",
        "value": "-164.08073"
    },
    {
        "location": "world",
        "year": "1886",
        "value": "-164.21407"
    },
    {
        "location": "world",
        "year": "1886",
        "value": "-178.98073"
    },
    {
        "location": "world",
        "year": "1887",
        "value": "-184.18073"
    },
    {
        "location": "world",
        "year": "1887",
        "value": "-180.78073"
    },
    {
        "location": "world",
        "year": "1887",
        "value": "-170.21407"
    },
    {
        "location": "world",
        "year": "1887",
        "value": "-171.88072"
    },
    {
        "location": "world",
        "year": "1888",
        "value": "-175.88072"
    },
    {
        "location": "world",
        "year": "1888",
        "value": "-177.71407"
    },
    {
        "location": "world",
        "year": "1888",
        "value": "-172.61406"
    },
    {
        "location": "world",
        "year": "1888",
        "value": "-170.41406"
    },
    {
        "location": "world",
        "year": "1889",
        "value": "-171.08073"
    },
    {
        "location": "world",
        "year": "1889",
        "value": "-167.98073"
    },
    {
        "location": "world",
        "year": "1889",
        "value": "-169.71407"
    },
    {
        "location": "world",
        "year": "1889",
        "value": "-177.1474"
    },
    {
        "location": "world",
        "year": "1890",
        "value": "-176.5474"
    },
    {
        "location": "world",
        "year": "1890",
        "value": "-160.71407"
    },
    {
        "location": "world",
        "year": "1890",
        "value": "-166.98073"
    },
    {
        "location": "world",
        "year": "1890",
        "value": "-175.28073"
    },
    {
        "location": "world",
        "year": "1891",
        "value": "-186.48073"
    },
    {
        "location": "world",
        "year": "1891",
        "value": "-171.01407"
    },
    {
        "location": "world",
        "year": "1891",
        "value": "-167.71407"
    },
    {
        "location": "world",
        "year": "1891",
        "value": "-168.21407"
    },
    {
        "location": "world",
        "year": "1892",
        "value": "-167.5474"
    },
    {
        "location": "world",
        "year": "1892",
        "value": "-163.41406"
    },
    {
        "location": "world",
        "year": "1892",
        "value": "-167.58073"
    },
    {
        "location": "world",
        "year": "1892",
        "value": "-176.08073"
    },
    {
        "location": "world",
        "year": "1893",
        "value": "-170.81406"
    },
    {
        "location": "world",
        "year": "1893",
        "value": "-160.8474"
    },
    {
        "location": "world",
        "year": "1893",
        "value": "-162.98073"
    },
    {
        "location": "world",
        "year": "1893",
        "value": "-164.48073"
    },
    {
        "location": "world",
        "year": "1894",
        "value": "-170.08073"
    },
    {
        "location": "world",
        "year": "1894",
        "value": "-173.21407"
    },
    {
        "location": "world",
        "year": "1894",
        "value": "-176.88072"
    },
    {
        "location": "world",
        "year": "1894",
        "value": "-177.01407"
    },
    {
        "location": "world",
        "year": "1895",
        "value": "-161.11406"
    },
    {
        "location": "world",
        "year": "1895",
        "value": "-166.0474"
    },
    {
        "location": "world",
        "year": "1895",
        "value": "-163.1474"
    },
    {
        "location": "world",
        "year": "1895",
        "value": "-158.74739"
    },
    {
        "location": "world",
        "year": "1896",
        "value": "-171.4474"
    },
    {
        "location": "world",
        "year": "1896",
        "value": "-172.88072"
    },
    {
        "location": "world",
        "year": "1896",
        "value": "-160.31406"
    },
    {
        "location": "world",
        "year": "1896",
        "value": "-169.8474"
    },
    {
        "location": "world",
        "year": "1897",
        "value": "-173.38072"
    },
    {
        "location": "world",
        "year": "1897",
        "value": "-162.48073"
    },
    {
        "location": "world",
        "year": "1897",
        "value": "-152.1474"
    },
    {
        "location": "world",
        "year": "1897",
        "value": "-168.9474"
    },
    {
        "location": "world",
        "year": "1898",
        "value": "-169.24739"
    },
    {
        "location": "world",
        "year": "1898",
        "value": "-147.9474"
    },
    {
        "location": "world",
        "year": "1898",
        "value": "-157.11406"
    },
    {
        "location": "world",
        "year": "1898",
        "value": "-155.61406"
    },
    {
        "location": "world",
        "year": "1899",
        "value": "-150.58073"
    },
    {
        "location": "world",
        "year": "1899",
        "value": "-149.88072"
    },
    {
        "location": "world",
        "year": "1899",
        "value": "-151.68073"
    },
    {
        "location": "world",
        "year": "1899",
        "value": "-140.08073"
    },
    {
        "location": "world",
        "year": "1900",
        "value": "-150.31406"
    },
    {
        "location": "world",
        "year": "1900",
        "value": "-151.78073"
    },
    {
        "location": "world",
        "year": "1900",
        "value": "-152.0474"
    },
    {
        "location": "world",
        "year": "1900",
        "value": "-155.38072"
    },
    {
        "location": "world",
        "year": "1901",
        "value": "-155.4474"
    },
    {
        "location": "world",
        "year": "1901",
        "value": "-156.58073"
    },
    {
        "location": "world",
        "year": "1901",
        "value": "-156.5474"
    },
    {
        "location": "world",
        "year": "1901",
        "value": "-147.48073"
    },
    {
        "location": "world",
        "year": "1902",
        "value": "-145.58073"
    },
    {
        "location": "world",
        "year": "1902",
        "value": "-150.78073"
    },
    {
        "location": "world",
        "year": "1902",
        "value": "-153.71407"
    },
    {
        "location": "world",
        "year": "1902",
        "value": "-145.41406"
    },
    {
        "location": "world",
        "year": "1903",
        "value": "-144.81406"
    },
    {
        "location": "world",
        "year": "1903",
        "value": "-134.61406"
    },
    {
        "location": "world",
        "year": "1903",
        "value": "-138.3474"
    },
    {
        "location": "world",
        "year": "1903",
        "value": "-145.71407"
    },
    {
        "location": "world",
        "year": "1904",
        "value": "-144.78073"
    },
    {
        "location": "world",
        "year": "1904",
        "value": "-147.74739"
    },
    {
        "location": "world",
        "year": "1904",
        "value": "-152.24739"
    },
    {
        "location": "world",
        "year": "1904",
        "value": "-155.08073"
    },
    {
        "location": "world",
        "year": "1905",
        "value": "-160.5474"
    },
    {
        "location": "world",
        "year": "1905",
        "value": "-160.81406"
    },
    {
        "location": "world",
        "year": "1905",
        "value": "-154.41406"
    },
    {
        "location": "world",
        "year": "1905",
        "value": "-150.81406"
    },
    {
        "location": "world",
        "year": "1906",
        "value": "-154.9474"
    },
    {
        "location": "world",
        "year": "1906",
        "value": "-150.41406"
    },
    {
        "location": "world",
        "year": "1906",
        "value": "-146.8474"
    },
    {
        "location": "world",
        "year": "1906",
        "value": "-148.98073"
    },
    {
        "location": "world",
        "year": "1907",
        "value": "-151.1474"
    },
    {
        "location": "world",
        "year": "1907",
        "value": "-147.28073"
    },
    {
        "location": "world",
        "year": "1907",
        "value": "-147.38072"
    },
    {
        "location": "world",
        "year": "1907",
        "value": "-157.0474"
    },
    {
        "location": "world",
        "year": "1908",
        "value": "-154.48073"
    },
    {
        "location": "world",
        "year": "1908",
        "value": "-153.9474"
    },
    {
        "location": "world",
        "year": "1908",
        "value": "-149.61406"
    },
    {
        "location": "world",
        "year": "1908",
        "value": "-156.48073"
    },
    {
        "location": "world",
        "year": "1909",
        "value": "-152.31406"
    },
    {
        "location": "world",
        "year": "1909",
        "value": "-146.31406"
    },
    {
        "location": "world",
        "year": "1909",
        "value": "-152.78073"
    },
    {
        "location": "world",
        "year": "1909",
        "value": "-148.6474"
    },
    {
        "location": "world",
        "year": "1910",
        "value": "-150.8474"
    },
    {
        "location": "world",
        "year": "1910",
        "value": "-150.9474"
    },
    {
        "location": "world",
        "year": "1910",
        "value": "-146.31406"
    },
    {
        "location": "world",
        "year": "1910",
        "value": "-148.71407"
    },
    {
        "location": "world",
        "year": "1911",
        "value": "-149.1474"
    },
    {
        "location": "world",
        "year": "1911",
        "value": "-144.08073"
    },
    {
        "location": "world",
        "year": "1911",
        "value": "-141.38072"
    },
    {
        "location": "world",
        "year": "1911",
        "value": "-133.58073"
    },
    {
        "location": "world",
        "year": "1912",
        "value": "-142.9474"
    },
    {
        "location": "world",
        "year": "1912",
        "value": "-149.68073"
    },
    {
        "location": "world",
        "year": "1912",
        "value": "-142.6474"
    },
    {
        "location": "world",
        "year": "1912",
        "value": "-141.08073"
    },
    {
        "location": "world",
        "year": "1913",
        "value": "-142.0474"
    },
    {
        "location": "world",
        "year": "1913",
        "value": "-150.21407"
    },
    {
        "location": "world",
        "year": "1913",
        "value": "-140.31406"
    },
    {
        "location": "world",
        "year": "1913",
        "value": "-136.11406"
    },
    {
        "location": "world",
        "year": "1914",
        "value": "-137.5474"
    },
    {
        "location": "world",
        "year": "1914",
        "value": "-139.6474"
    },
    {
        "location": "world",
        "year": "1914",
        "value": "-143.61406"
    },
    {
        "location": "world",
        "year": "1914",
        "value": "-132.18073"
    },
    {
        "location": "world",
        "year": "1915",
        "value": "-108.7474"
    },
    {
        "location": "world",
        "year": "1915",
        "value": "-124.214066"
    },
    {
        "location": "world",
        "year": "1915",
        "value": "-135.9474"
    },
    {
        "location": "world",
        "year": "1915",
        "value": "-136.3474"
    },
    {
        "location": "world",
        "year": "1916",
        "value": "-129.58073"
    },
    {
        "location": "world",
        "year": "1916",
        "value": "-125.58073"
    },
    {
        "location": "world",
        "year": "1916",
        "value": "-134.78073"
    },
    {
        "location": "world",
        "year": "1916",
        "value": "-132.61406"
    },
    {
        "location": "world",
        "year": "1917",
        "value": "-127.78073"
    },
    {
        "location": "world",
        "year": "1917",
        "value": "-137.38072"
    },
    {
        "location": "world",
        "year": "1917",
        "value": "-134.48073"
    },
    {
        "location": "world",
        "year": "1917",
        "value": "-135.68073"
    },
    {
        "location": "world",
        "year": "1918",
        "value": "-134.41406"
    },
    {
        "location": "world",
        "year": "1918",
        "value": "-138.5474"
    },
    {
        "location": "world",
        "year": "1918",
        "value": "-135.71407"
    },
    {
        "location": "world",
        "year": "1918",
        "value": "-134.1474"
    },
    {
        "location": "world",
        "year": "1919",
        "value": "-141.0474"
    },
    {
        "location": "world",
        "year": "1919",
        "value": "-138.38072"
    },
    {
        "location": "world",
        "year": "1919",
        "value": "-128.48073"
    },
    {
        "location": "world",
        "year": "1919",
        "value": "-130.78073"
    },
    {
        "location": "world",
        "year": "1920",
        "value": "-138.31406"
    },
    {
        "location": "world",
        "year": "1920",
        "value": "-134.81406"
    },
    {
        "location": "world",
        "year": "1920",
        "value": "-127.18073"
    },
    {
        "location": "world",
        "year": "1920",
        "value": "-133.78073"
    },
    {
        "location": "world",
        "year": "1921",
        "value": "-131.91406"
    },
    {
        "location": "world",
        "year": "1921",
        "value": "-126.814064"
    },
    {
        "location": "world",
        "year": "1921",
        "value": "-129.5474"
    },
    {
        "location": "world",
        "year": "1921",
        "value": "-136.5474"
    },
    {
        "location": "world",
        "year": "1922",
        "value": "-131.9474"
    },
    {
        "location": "world",
        "year": "1922",
        "value": "-129.88072"
    },
    {
        "location": "world",
        "year": "1922",
        "value": "-133.6474"
    },
    {
        "location": "world",
        "year": "1922",
        "value": "-134.74739"
    },
    {
        "location": "world",
        "year": "1923",
        "value": "-128.58073"
    },
    {
        "location": "world",
        "year": "1923",
        "value": "-126.51406"
    },
    {
        "location": "world",
        "year": "1923",
        "value": "-129.5474"
    },
    {
        "location": "world",
        "year": "1923",
        "value": "-134.28073"
    },
    {
        "location": "world",
        "year": "1924",
        "value": "-138.71407"
    },
    {
        "location": "world",
        "year": "1924",
        "value": "-136.38072"
    },
    {
        "location": "world",
        "year": "1924",
        "value": "-138.98073"
    },
    {
        "location": "world",
        "year": "1924",
        "value": "-139.01407"
    },
    {
        "location": "world",
        "year": "1925",
        "value": "-135.61406"
    },
    {
        "location": "world",
        "year": "1925",
        "value": "-137.11406"
    },
    {
        "location": "world",
        "year": "1925",
        "value": "-138.4474"
    },
    {
        "location": "world",
        "year": "1925",
        "value": "-135.8474"
    },
    {
        "location": "world",
        "year": "1926",
        "value": "-133.21407"
    },
    {
        "location": "world",
        "year": "1926",
        "value": "-135.58073"
    },
    {
        "location": "world",
        "year": "1926",
        "value": "-126.28073"
    },
    {
        "location": "world",
        "year": "1926",
        "value": "-122.68073"
    },
    {
        "location": "world",
        "year": "1927",
        "value": "-133.5474"
    },
    {
        "location": "world",
        "year": "1927",
        "value": "-128.71407"
    },
    {
        "location": "world",
        "year": "1927",
        "value": "-127.7474"
    },
    {
        "location": "world",
        "year": "1927",
        "value": "-131.98073"
    },
    {
        "location": "world",
        "year": "1928",
        "value": "-138.51407"
    },
    {
        "location": "world",
        "year": "1928",
        "value": "-134.58073"
    },
    {
        "location": "world",
        "year": "1928",
        "value": "-128.88072"
    },
    {
        "location": "world",
        "year": "1928",
        "value": "-133.88072"
    },
    {
        "location": "world",
        "year": "1929",
        "value": "-141.3474"
    },
    {
        "location": "world",
        "year": "1929",
        "value": "-133.11406"
    },
    {
        "location": "world",
        "year": "1929",
        "value": "-129.08073"
    },
    {
        "location": "world",
        "year": "1929",
        "value": "-131.4474"
    },
    {
        "location": "world",
        "year": "1930",
        "value": "-134.6474"
    },
    {
        "location": "world",
        "year": "1930",
        "value": "-136.01407"
    },
    {
        "location": "world",
        "year": "1930",
        "value": "-122.91406"
    },
    {
        "location": "world",
        "year": "1930",
        "value": "-124.78073"
    },
    {
        "location": "world",
        "year": "1931",
        "value": "-130.8474"
    },
    {
        "location": "world",
        "year": "1931",
        "value": "-130.08073"
    },
    {
        "location": "world",
        "year": "1931",
        "value": "-126.7474"
    },
    {
        "location": "world",
        "year": "1931",
        "value": "-131.21407"
    },
    {
        "location": "world",
        "year": "1932",
        "value": "-126.714066"
    },
    {
        "location": "world",
        "year": "1932",
        "value": "-124.41406"
    },
    {
        "location": "world",
        "year": "1932",
        "value": "-125.14739"
    },
    {
        "location": "world",
        "year": "1932",
        "value": "-122.64739"
    },
    {
        "location": "world",
        "year": "1933",
        "value": "-117.54739"
    },
    {
        "location": "world",
        "year": "1933",
        "value": "-116.314064"
    },
    {
        "location": "world",
        "year": "1933",
        "value": "-119.98073"
    },
    {
        "location": "world",
        "year": "1933",
        "value": "-122.88073"
    },
    {
        "location": "world",
        "year": "1934",
        "value": "-123.8474"
    },
    {
        "location": "world",
        "year": "1934",
        "value": "-120.64739"
    },
    {
        "location": "world",
        "year": "1934",
        "value": "-127.3474"
    },
    {
        "location": "world",
        "year": "1934",
        "value": "-128.5474"
    },
    {
        "location": "world",
        "year": "1935",
        "value": "-119.3474"
    },
    {
        "location": "world",
        "year": "1935",
        "value": "-116.11406"
    },
    {
        "location": "world",
        "year": "1935",
        "value": "-118.14739"
    },
    {
        "location": "world",
        "year": "1935",
        "value": "-123.7474"
    },
    {
        "location": "world",
        "year": "1936",
        "value": "-120.51406"
    },
    {
        "location": "world",
        "year": "1936",
        "value": "-124.947395"
    },
    {
        "location": "world",
        "year": "1936",
        "value": "-124.814064"
    },
    {
        "location": "world",
        "year": "1936",
        "value": "-124.08073"
    },
    {
        "location": "world",
        "year": "1937",
        "value": "-119.714066"
    },
    {
        "location": "world",
        "year": "1937",
        "value": "-117.54739"
    },
    {
        "location": "world",
        "year": "1937",
        "value": "-119.88073"
    },
    {
        "location": "world",
        "year": "1937",
        "value": "-115.8474"
    },
    {
        "location": "world",
        "year": "1938",
        "value": "-110.91406"
    },
    {
        "location": "world",
        "year": "1938",
        "value": "-112.11406"
    },
    {
        "location": "world",
        "year": "1938",
        "value": "-121.54739"
    },
    {
        "location": "world",
        "year": "1938",
        "value": "-115.14739"
    },
    {
        "location": "world",
        "year": "1939",
        "value": "-114.58073"
    },
    {
        "location": "world",
        "year": "1939",
        "value": "-111.54739"
    },
    {
        "location": "world",
        "year": "1939",
        "value": "-101.48073"
    },
    {
        "location": "world",
        "year": "1939",
        "value": "-112.01406"
    },
    {
        "location": "world",
        "year": "1940",
        "value": "-111.91406"
    },
    {
        "location": "world",
        "year": "1940",
        "value": "-117.48073"
    },
    {
        "location": "world",
        "year": "1940",
        "value": "-121.68073"
    },
    {
        "location": "world",
        "year": "1940",
        "value": "-111.18073"
    },
    {
        "location": "world",
        "year": "1941",
        "value": "-106.01406"
    },
    {
        "location": "world",
        "year": "1941",
        "value": "-103.41406"
    },
    {
        "location": "world",
        "year": "1941",
        "value": "-100.7474"
    },
    {
        "location": "world",
        "year": "1941",
        "value": "-101.48073"
    },
    {
        "location": "world",
        "year": "1942",
        "value": "-107.2474"
    },
    {
        "location": "world",
        "year": "1942",
        "value": "-108.3474"
    },
    {
        "location": "world",
        "year": "1942",
        "value": "-101.447395"
    },
    {
        "location": "world",
        "year": "1942",
        "value": "-97.04739"
    },
    {
        "location": "world",
        "year": "1943",
        "value": "-97.88073"
    },
    {
        "location": "world",
        "year": "1943",
        "value": "-98.51406"
    },
    {
        "location": "world",
        "year": "1943",
        "value": "-104.01406"
    },
    {
        "location": "world",
        "year": "1943",
        "value": "-107.98073"
    },
    {
        "location": "world",
        "year": "1944",
        "value": "-105.2474"
    },
    {
        "location": "world",
        "year": "1944",
        "value": "-102.814064"
    },
    {
        "location": "world",
        "year": "1944",
        "value": "-116.947395"
    },
    {
        "location": "world",
        "year": "1944",
        "value": "-112.88073"
    },
    {
        "location": "world",
        "year": "1945",
        "value": "-107.64739"
    },
    {
        "location": "world",
        "year": "1945",
        "value": "-107.01406"
    },
    {
        "location": "world",
        "year": "1945",
        "value": "-104.447395"
    },
    {
        "location": "world",
        "year": "1945",
        "value": "-108.447395"
    },
    {
        "location": "world",
        "year": "1946",
        "value": "-103.54739"
    },
    {
        "location": "world",
        "year": "1946",
        "value": "-98.68073"
    },
    {
        "location": "world",
        "year": "1946",
        "value": "-92.68073"
    },
    {
        "location": "world",
        "year": "1946",
        "value": "-101.01406"
    },
    {
        "location": "world",
        "year": "1947",
        "value": "-104.28073"
    },
    {
        "location": "world",
        "year": "1947",
        "value": "-101.7474"
    },
    {
        "location": "world",
        "year": "1947",
        "value": "-97.447395"
    },
    {
        "location": "world",
        "year": "1947",
        "value": "-86.8474"
    },
    {
        "location": "world",
        "year": "1948",
        "value": "-87.3474"
    },
    {
        "location": "world",
        "year": "1948",
        "value": "-92.98073"
    },
    {
        "location": "world",
        "year": "1948",
        "value": "-91.814064"
    },
    {
        "location": "world",
        "year": "1948",
        "value": "-90.8474"
    },
    {
        "location": "world",
        "year": "1949",
        "value": "-87.314064"
    },
    {
        "location": "world",
        "year": "1949",
        "value": "-92.54739"
    },
    {
        "location": "world",
        "year": "1949",
        "value": "-95.41406"
    },
    {
        "location": "world",
        "year": "1949",
        "value": "-93.68073"
    },
    {
        "location": "world",
        "year": "1950",
        "value": "-92.28073"
    },
    {
        "location": "world",
        "year": "1950",
        "value": "-92.2474"
    },
    {
        "location": "world",
        "year": "1950",
        "value": "-91.447395"
    },
    {
        "location": "world",
        "year": "1950",
        "value": "-87.61406"
    },
    {
        "location": "world",
        "year": "1951",
        "value": "-82.01406"
    },
    {
        "location": "world",
        "year": "1951",
        "value": "-74.01406"
    },
    {
        "location": "world",
        "year": "1951",
        "value": "-82.314064"
    },
    {
        "location": "world",
        "year": "1951",
        "value": "-83.947395"
    },
    {
        "location": "world",
        "year": "1952",
        "value": "-85.08073"
    },
    {
        "location": "world",
        "year": "1952",
        "value": "-86.98073"
    },
    {
        "location": "world",
        "year": "1952",
        "value": "-84.48073"
    },
    {
        "location": "world",
        "year": "1952",
        "value": "-79.61406"
    },
    {
        "location": "world",
        "year": "1953",
        "value": "-76.8474"
    },
    {
        "location": "world",
        "year": "1953",
        "value": "-78.28073"
    },
    {
        "location": "world",
        "year": "1953",
        "value": "-75.3474"
    },
    {
        "location": "world",
        "year": "1953",
        "value": "-82.214066"
    },
    {
        "location": "world",
        "year": "1954",
        "value": "-82.18073"
    },
    {
        "location": "world",
        "year": "1954",
        "value": "-81.2474"
    },
    {
        "location": "world",
        "year": "1954",
        "value": "-86.714066"
    },
    {
        "location": "world",
        "year": "1954",
        "value": "-80.814064"
    },
    {
        "location": "world",
        "year": "1955",
        "value": "-72.38073"
    },
    {
        "location": "world",
        "year": "1955",
        "value": "-79.61406"
    },
    {
        "location": "world",
        "year": "1955",
        "value": "-87.447395"
    },
    {
        "location": "world",
        "year": "1955",
        "value": "-81.7474"
    },
    {
        "location": "world",
        "year": "1956",
        "value": "-82.38073"
    },
    {
        "location": "world",
        "year": "1956",
        "value": "-82.38073"
    },
    {
        "location": "world",
        "year": "1956",
        "value": "-86.58073"
    },
    {
        "location": "world",
        "year": "1956",
        "value": "-90.01406"
    },
    {
        "location": "world",
        "year": "1957",
        "value": "-83.01406"
    },
    {
        "location": "world",
        "year": "1957",
        "value": "-70.11406"
    },
    {
        "location": "world",
        "year": "1957",
        "value": "-69.54739"
    },
    {
        "location": "world",
        "year": "1957",
        "value": "-72.8474"
    },
    {
        "location": "world",
        "year": "1958",
        "value": "-72.2474"
    },
    {
        "location": "world",
        "year": "1958",
        "value": "-73.314064"
    },
    {
        "location": "world",
        "year": "1958",
        "value": "-72.91406"
    },
    {
        "location": "world",
        "year": "1958",
        "value": "-68.814064"
    },
    {
        "location": "world",
        "year": "1959",
        "value": "-68.714066"
    },
    {
        "location": "world",
        "year": "1959",
        "value": "-73.11406"
    },
    {
        "location": "world",
        "year": "1959",
        "value": "-70.214066"
    },
    {
        "location": "world",
        "year": "1959",
        "value": "-69.91406"
    },
    {
        "location": "world",
        "year": "1960",
        "value": "-70.38073"
    },
    {
        "location": "world",
        "year": "1960",
        "value": "-66.48073"
    },
    {
        "location": "world",
        "year": "1960",
        "value": "-66.88073"
    },
    {
        "location": "world",
        "year": "1960",
        "value": "-67.58073"
    },
    {
        "location": "world",
        "year": "1961",
        "value": "-60.247395"
    },
    {
        "location": "world",
        "year": "1961",
        "value": "-56.247395"
    },
    {
        "location": "world",
        "year": "1961",
        "value": "-60.747395"
    },
    {
        "location": "world",
        "year": "1961",
        "value": "-65.64739"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "-66.68073"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "-67.61406"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "-68.04739"
    },
    {
        "location": "world",
        "year": "1962",
        "value": "-63.414062"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "-63.88073"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "-65.51406"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "-69.91406"
    },
    {
        "location": "world",
        "year": "1963",
        "value": "-69.01406"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "-77.947395"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "-81.947395"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "-70.98073"
    },
    {
        "location": "world",
        "year": "1964",
        "value": "-73.11406"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "-66.18073"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "-67.04739"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "-66.314064"
    },
    {
        "location": "world",
        "year": "1965",
        "value": "-60.747395"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "-64.28073"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "-70.08073"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "-70.48073"
    },
    {
        "location": "world",
        "year": "1966",
        "value": "-71.68073"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "-72.91406"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "-73.8474"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "-66.447395"
    },
    {
        "location": "world",
        "year": "1967",
        "value": "-63.947395"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "-63.48073"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "-75.48073"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "-72.814064"
    },
    {
        "location": "world",
        "year": "1968",
        "value": "-60.01406"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "-59.71406"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "-60.314064"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "-62.614063"
    },
    {
        "location": "world",
        "year": "1969",
        "value": "-60.347397"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "-61.51406"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "-63.114063"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "-64.7474"
    },
    {
        "location": "world",
        "year": "1970",
        "value": "-62.814064"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "-57.48073"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "-55.347397"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "-60.48073"
    },
    {
        "location": "world",
        "year": "1971",
        "value": "-57.08073"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "-56.51406"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "-47.08073"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "-43.71406"
    },
    {
        "location": "world",
        "year": "1972",
        "value": "-49.747395"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "-54.68073"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "-56.280727"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "-56.747395"
    },
    {
        "location": "world",
        "year": "1973",
        "value": "-53.18073"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "-40.18073"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "-40.48073"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "-43.18073"
    },
    {
        "location": "world",
        "year": "1974",
        "value": "-46.047398"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "-43.947395"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "-42.914062"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "-45.847397"
    },
    {
        "location": "world",
        "year": "1975",
        "value": "-43.747395"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "-46.68073"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "-46.280727"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "-44.747395"
    },
    {
        "location": "world",
        "year": "1976",
        "value": "-44.414062"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "-44.247395"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "-49.614063"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "-48.51406"
    },
    {
        "location": "world",
        "year": "1977",
        "value": "-45.547398"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "-38.247395"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "-37.347397"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "-41.814064"
    },
    {
        "location": "world",
        "year": "1978",
        "value": "-42.21406"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "-49.614063"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "-49.38073"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "-46.814064"
    },
    {
        "location": "world",
        "year": "1979",
        "value": "-39.38073"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "-37.68073"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "-38.914062"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "-41.88073"
    },
    {
        "location": "world",
        "year": "1980",
        "value": "-40.98073"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "-31.080729"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "-26.814062"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "-25.98073"
    },
    {
        "location": "world",
        "year": "1981",
        "value": "-25.914062"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "-30.214062"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "-35.314064"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "-37.88073"
    },
    {
        "location": "world",
        "year": "1982",
        "value": "-28.614063"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "-23.547396"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "-18.614063"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "-22.28073"
    },
    {
        "location": "world",
        "year": "1983",
        "value": "-30.647396"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "-30.48073"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "-25.047396"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "-21.714062"
    },
    {
        "location": "world",
        "year": "1984",
        "value": "-24.814062"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "-31.680729"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "-35.21406"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "-36.98073"
    },
    {
        "location": "world",
        "year": "1985",
        "value": "-36.58073"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "-33.814064"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "-33.780727"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "-35.18073"
    },
    {
        "location": "world",
        "year": "1986",
        "value": "-36.814064"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "-33.847397"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "-34.280727"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "-33.247395"
    },
    {
        "location": "world",
        "year": "1987",
        "value": "-37.614063"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "-31.414062"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "-31.647396"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "-28.847395"
    },
    {
        "location": "world",
        "year": "1988",
        "value": "-26.514063"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "-31.847395"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "-24.614063"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "-25.147396"
    },
    {
        "location": "world",
        "year": "1989",
        "value": "-22.247396"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "-25.247396"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "-28.314062"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "-22.847395"
    },
    {
        "location": "world",
        "year": "1990",
        "value": "-19.48073"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "-20.347395"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "-21.814062"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "-22.814062"
    },
    {
        "location": "world",
        "year": "1991",
        "value": "-18.947395"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "-16.38073"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "-17.414062"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "-20.247396"
    },
    {
        "location": "world",
        "year": "1992",
        "value": "-17.814062"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "-19.580729"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "-16.314062"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "-22.78073"
    },
    {
        "location": "world",
        "year": "1993",
        "value": "-28.714062"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "-22.347395"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "-20.080729"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "-17.98073"
    },
    {
        "location": "world",
        "year": "1994",
        "value": "-18.247396"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "-16.347395"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "-15.280729"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "-15.5807295"
    },
    {
        "location": "world",
        "year": "1995",
        "value": "-11.547396"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "-7.247396"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "-15.180729"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "-11.947396"
    },
    {
        "location": "world",
        "year": "1996",
        "value": "-5.1473956"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "-6.480729"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "0.11927083"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "-2.6473958"
    },
    {
        "location": "world",
        "year": "1997",
        "value": "-2.1140625"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "-1.8473958"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "-11.647396"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "-10.814062"
    },
    {
        "location": "world",
        "year": "1998",
        "value": "-9.114062"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "-8.480729"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "-0.64739585"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "-0.24739583"
    },
    {
        "location": "world",
        "year": "1999",
        "value": "-3.0807292"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "-8.347396"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "0.7859375"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "2.952604"
    },
    {
        "location": "world",
        "year": "2000",
        "value": "-4.6140623"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "-0.8140625"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "2.7526042"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "4.7192707"
    },
    {
        "location": "world",
        "year": "2001",
        "value": "3.3192708"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "-2.780729"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "-1.0473958"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "2.152604"
    },
    {
        "location": "world",
        "year": "2002",
        "value": "5.2192707"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "4.3859377"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "5.919271"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "14.619271"
    },
    {
        "location": "world",
        "year": "2003",
        "value": "15.719271"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "8.2526045"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "9.152604"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "13.652604"
    },
    {
        "location": "world",
        "year": "2004",
        "value": "9.985937"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "10.619271"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "10.052604"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "12.119271"
    },
    {
        "location": "world",
        "year": "2005",
        "value": "6.3526044"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "6.652604"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "14.119271"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "9.519271"
    },
    {
        "location": "world",
        "year": "2006",
        "value": "13.652604"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "4.3859377"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "10.385938"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "22.785938"
    },
    {
        "location": "world",
        "year": "2007",
        "value": "17.51927"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "17.552605"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "25.352604"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "30.452604"
    },
    {
        "location": "world",
        "year": "2008",
        "value": "23.819271"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "19.319271"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "24.652605"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "33.652603"
    },
    {
        "location": "world",
        "year": "2009",
        "value": "38.085938"
    }
]