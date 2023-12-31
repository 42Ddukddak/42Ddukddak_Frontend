const messageValidate = (message: string) => {
  const badWordsList = [
    '시발',
    '개새끼',
    '씨발',
    '엿',
    '느금',
    '닥쳐',
    '닭쳐',
    '병신',
    '미친',
    '니미',
    '평신',
    '섹스',
    '꺼져',
    '꺼저',
    '면상',
    '빻았다',
    '빠았다',
    '유승준',
    '뻐큐',
    '뻑유',
    '퍽유',
    'fuck',
    'sex',
    '꼬추',
    '보지',
    '자지',
    '짬지',
    '씹',
    '창녀',
    '지랄',
    '좆',
    '슴가',
    '아가리',
    '새끼',
    '개년',
    '개쓰레기',
    '개씨발',
    '개지랄',
    '개자식',
    '거지새끼',
    '걸레',
    '광녀',
    '꼴통',
    '남창',
    'nigger',
    '니미럴',
    '니그로',
    '죽어',
    '딸딸이',
    '똘마니',
    '똘추',
    '똥꼬',
    '부랄',
    '랄부',
    '빠구리',
    '빨통',
    '쌍놈',
    '쌍년',
    '썅',
    '애미',
    '애비',
  ];

  // 'g' : 문자열 전체를 확인한다.
  // 'i' : 문자열에서 대소문자를 구분하지 않는다.
  const regexPattern = new RegExp(badWordsList.join('|'), 'gi');
  return message.replace(regexPattern, '***');
};

export default messageValidate;
