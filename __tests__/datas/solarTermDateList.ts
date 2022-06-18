/* eslint-disable prettier/prettier */
const data = [
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1901
  [6,21,5,19,6,21,6,21,6,22,7,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1902
  [6,21,5,20,7,22,6,21,7,22,7,22,8,24,9,24,9,24,9,24,8,23,8,23],  // 1903
  [7,21,5,20,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1904
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1905
  [6,21,5,19,6,21,6,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1906
  [6,21,5,20,7,22,6,21,7,22,7,22,8,24,9,24,9,24,9,24,8,23,8,23],  // 1907
  [7,21,5,20,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1908
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1909
  [6,21,5,19,6,21,6,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1910
  [6,21,5,20,7,22,6,21,7,22,7,22,8,24,9,24,9,24,9,24,8,23,8,23],  // 1911
  [7,21,5,20,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1912
  [6,20,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1913
  [6,21,4,19,6,21,5,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1914
  [6,21,5,20,6,22,6,21,6,22,7,22,8,24,8,24,9,24,9,24,8,23,8,23],  // 1915
  [6,21,5,20,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1916
  [6,20,4,19,6,21,5,21,6,21,6,22,8,23,8,24,8,23,9,24,8,23,7,22],  // 1917
  [6,21,4,19,6,21,5,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,22],  // 1918
  [6,21,5,20,6,22,6,21,6,22,7,22,8,24,8,24,9,24,9,24,8,23,8,23],  // 1919
  [6,21,5,20,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1920
  [6,20,4,19,6,21,5,20,6,21,6,22,8,23,8,24,8,23,9,24,8,23,7,22],  // 1921
  [6,21,4,19,6,21,5,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,22],  // 1922
  [6,21,5,19,6,21,6,21,6,22,7,22,8,24,8,24,9,24,9,24,8,23,8,23],  // 1923
  [6,21,5,20,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1924
  [6,20,4,19,6,21,5,20,6,21,6,22,8,23,8,24,8,23,9,24,8,23,7,22],  // 1925
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1926
  [6,21,5,19,6,21,6,21,6,22,7,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1927
  [6,21,5,20,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1928
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1929
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1930
  [6,21,5,19,6,21,6,21,6,22,7,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1931
  [6,21,5,20,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1932
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1933
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1934
  [6,21,5,19,6,21,6,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1935
  [6,21,5,20,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1936
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1937
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1938
  [6,21,5,19,6,21,6,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1939
  [6,21,5,20,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1940
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1941
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1942
  [6,21,5,19,6,21,6,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1943
  [6,21,5,20,6,21,5,20,5,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1944
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1945
  [6,20,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,23,9,24,8,23,8,22],  // 1946
  [6,21,4,19,6,21,5,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1947
  [6,21,5,20,5,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 1948
  [5,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1949
  [6,20,4,19,6,21,5,20,6,21,6,22,8,23,8,24,8,23,9,24,8,23,8,22],  // 1950
  [6,21,4,19,6,21,5,21,6,22,6,22,8,24,8,24,8,24,9,24,8,23,8,23],  // 1951
  [6,21,5,20,5,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 1952
  [5,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1953
  [6,20,4,19,6,21,5,20,6,21,6,22,8,23,8,24,8,23,9,24,8,23,7,22],  // 1954
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1955
  [6,21,5,20,5,20,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 1956
  [5,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1957
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1958
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1959
  [6,21,5,19,5,20,5,20,5,21,6,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1960
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1961
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1962
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1963
  [6,21,5,19,5,20,5,20,5,21,6,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1964
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1965
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1966
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1967
  [6,21,5,19,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1968
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1969
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1970
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,24,9,24,8,23,8,22],  // 1971
  [6,21,5,19,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1972
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1973
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1974
  [6,21,4,19,6,21,5,21,6,22,6,22,8,23,8,24,8,23,9,24,8,23,8,22],  // 1975
  [6,21,5,19,5,20,4,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1976
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 1977
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,23,7,22],  // 1978
  [6,21,4,19,6,21,5,21,6,21,6,22,8,23,8,24,8,23,9,24,8,23,8,22],  // 1979
  [6,21,5,19,5,20,4,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1980
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 1981
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1982
  [6,20,4,19,6,21,5,20,6,21,6,22,8,23,8,24,8,23,9,24,8,23,8,22],  // 1983
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 1984
  [5,20,4,19,5,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 1985
  [5,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 1986
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,24,8,23,9,24,8,23,7,22],  // 1987
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 1988
  [5,20,4,19,5,20,5,20,5,21,6,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1989
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22],  // 1990
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1991
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 1992
  [5,20,4,18,5,20,5,20,5,21,6,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1993
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1994
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1995
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 1996
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 1997
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 1998
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 1999
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2000
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2001
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 2002
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 2003
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2004
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2005
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2006
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,9,24,8,23,7,22],  // 2007
  [6,21,4,19,5,20,4,20,5,21,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2008
  [5,20,4,18,5,20,4,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2009
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2010
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,23,7,22],  // 2011
  [6,21,4,19,5,20,4,20,5,20,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2012
  [5,20,4,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2013
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2014
  [6,20,4,19,6,21,5,20,6,21,6,22,7,23,8,23,8,23,8,24,8,22,7,22],  // 2015
  [6,20,4,19,5,20,4,19,5,20,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2016
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2017
  [5,20,4,19,5,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2018
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22],  // 2019
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,7,21],  // 2020
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2021
  [5,20,4,19,5,20,5,20,5,21,6,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2022
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22],  // 2023
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2024
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2025
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2026
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 2027
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2028
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2029
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2030
  [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,23,7,22,7,22],  // 2031
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2032
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2033
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2034
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2035
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2036
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2037
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2038
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2039
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2040
  [5,20,3,18,5,20,4,20,5,20,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2041
  [5,20,4,18,5,20,4,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2042
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2043
  [6,20,4,19,5,20,4,19,5,20,5,21,6,22,7,22,7,22,7,23,7,22,6,21],  // 2044
  [5,20,3,18,5,20,4,19,5,20,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2045
  [5,20,4,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2046
  [5,20,4,19,6,21,5,20,5,21,6,21,7,23,7,23,8,23,8,23,7,22,7,22],  // 2047
  [6,20,4,19,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,23,7,21,6,21],  // 2048
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,7,21],  // 2049
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2050
  [5,20,4,19,5,20,5,20,5,21,6,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2051
  [5,20,4,19,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,23,7,21,6,21],  // 2052
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,7,21],  // 2053
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2054
  [5,20,4,19,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2055
  [5,20,4,19,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,23,7,21,6,21],  // 2056
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2057
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2058
  [5,20,4,19,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2059
  [5,20,4,19,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,22,6,21,6,21],  // 2060
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2061
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2062
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2063
  [5,20,4,19,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,22,6,21,6,21],  // 2064
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2065
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2066
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2067
  [5,20,4,19,5,20,4,19,4,20,5,20,6,22,6,22,7,22,7,22,6,21,6,21],  // 2068
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2069
  [5,20,3,18,5,20,4,20,5,20,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2070
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22],  // 2071
  [5,20,4,19,5,20,4,19,4,20,5,20,6,22,6,22,7,22,7,22,6,21,6,21],  // 2072
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,7,23,7,22,6,21],  // 2073
  [5,20,3,18,5,20,4,20,5,20,5,21,7,22,7,23,7,22,8,23,7,22,7,21],  // 2074
  [5,20,4,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2075
  [5,20,4,19,5,20,4,19,4,20,5,20,6,22,6,22,7,22,7,22,6,21,6,21],  // 2076
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,7,23,7,22,6,21],  // 2077
  [5,20,3,18,5,20,4,19,5,20,5,21,6,22,7,23,7,22,8,23,7,22,7,21],  // 2078
  [5,20,4,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2079
  [5,20,4,19,5,20,4,19,4,20,5,20,6,22,6,22,7,22,7,22,6,21,6,21],  // 2080
  [5,19,3,18,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,23,7,21,6,21],  // 2081
  [5,20,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,7,21],  // 2082
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2083
  [5,20,4,19,4,19,4,19,4,20,5,20,6,22,6,22,6,22,7,22,6,21,6,21],  // 2084
  [4,19,3,18,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,23,7,21,6,21],  // 2085
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,7,21],  // 2086
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,22],  // 2087
  [5,20,4,19,4,19,4,19,4,20,4,20,6,22,6,22,6,22,7,22,6,21,6,21],  // 2088
  [4,19,3,18,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,23,7,21,6,21],  // 2089
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2090
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2091
  [5,20,4,19,4,19,4,19,4,20,4,20,6,22,6,22,6,22,7,22,6,21,6,21],  // 2092
  [4,19,3,18,5,20,4,19,5,20,5,20,6,22,7,22,7,22,7,22,6,21,6,21],  // 2093
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2094
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2095
  [5,20,4,18,4,19,4,19,4,20,4,20,6,22,6,22,6,22,7,22,6,21,6,21],  // 2096
  [4,19,3,18,5,20,4,19,5,20,5,20,6,22,6,22,7,22,7,22,6,21,6,21],  // 2097
  [5,19,3,18,5,20,4,19,5,20,5,21,6,22,7,22,7,22,8,23,7,22,6,21],  // 2098
  [5,20,3,18,5,20,4,20,5,21,5,21,7,22,7,23,7,23,8,23,7,22,7,21],  // 2099
  [5,20,4,18,5,20,5,20,5,21,5,21,7,23,7,23,7,23,8,23,7,22,7,22]  // 2100
]

export default data