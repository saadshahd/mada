const initalState = {
  stats: [
    'إخلاء أول عرض',
    'إخلاء عرض باكر',
    'إخلاء خلال أسبوع',
    'إخلاء مدة أسبوع لشهر',
    'إخلاء مدة شهر لستة شهور',
    'إخلاء مدة 6 شهور لسنة',
    'إخلاء مدة سنة فأكثر',
    'إخلاء سبيل غير محدد التاريخ',
    'إحالة للمحاكمة محبوسا ثم حكم إدانة',
    'إحالة للمحاكمة محبوسا ثم حكم براءة',
    'إحالة للمحاكمة محبوسا ثم عفو رئاسي',
    'إحالة للمحاكمة محبوسا',
    'الإجمالي'
  ],
  'الشهر وربع الأخير من عام 2013': [
    21,
    1,
    38,
    26,
    76,
    4,
    14,
    195,
    604,
    279,
    5,
    84,
    1347
  ],
  'الربع الأول من عام 2014': [
    51,
    0,
    7,
    87,
    216,
    46,
    60,
    327,
    728,
    572,
    1,
    164,
    2259
  ],
  'الربع الثاني من عام 2014': [
    11,
    19,
    16,
    19,
    40,
    10,
    5,
    87,
    115,
    53,
    22,
    45,
    442
  ],
  'الربع الثالث من عام 2014': [
    6,
    24,
    22,
    3,
    39,
    8,
    6,
    72,
    189,
    152,
    0,
    75,
    596
  ],
  'الربع الرابع من عام 2014': [
    31,
    23,
    38,
    30,
    40,
    0,
    15,
    133,
    216,
    146,
    0,
    186,
    858
  ],
  'الربع الأول من عام 2015': [
    46,
    5,
    12,
    39,
    50,
    9,
    38,
    55,
    132,
    98,
    0,
    158,
    642
  ],
  'الربع الثاني من عام 2015': [4, 2, 10, 9, 36, 53, 8, 14, 90, 27, 0, 30, 283],
  'الربع الثالث من عام 2015': [0, 17, 14, 5, 69, 2, 0, 4, 20, 23, 0, 2, 156],
  'الربع الرابع من عام 2015': [38, 10, 11, 27, 72, 7, 0, 5, 49, 21, 0, 9, 249],
  'الربع الأول من عام 2016': [
    46,
    5,
    12,
    39,
    50,
    9,
    38,
    55,
    132,
    98,
    0,
    158,
    642
  ],
  'الربع الثاني من عام 2016': [4, 2, 10, 9, 36, 53, 8, 14, 90, 27, 0, 30, 283],
  'الربع الثالث من عام 2016': [0, 17, 14, 5, 69, 2, 0, 4, 20, 23, 0, 2, 156],
  الإجمالي: [258, 125, 204, 298, 793, 203, 192, 965, 2385, 1519, 28, 943, 7913]
};

export default function data(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
