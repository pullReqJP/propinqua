import React, { Fragment } from 'react';
import reactStringReplace from 'react-string-replace';

export default (props) => {
  // console.info('props：', props);
  // props に type があれば取得
  const Tag = props.type ? props.type : 'div';

  // props（配列）をリテラルとタグとに分別
  const childrenWithProps = React.Children.map(props.children, (child, i) => {
    switch (typeof child) {
      case 'string':
        return typeSet(child, i);
        break;

      case 'object':
        return extractString(child, i);
        break;

      default:
        return null;
        break;
    }
  });

  return <Tag {...props}>{childrenWithProps}</Tag>;
};

// タグをリテラルに分解
function extractString(obj, i) {
  // console.info('obj：' + obj);
  const Tag = obj.type;
  const childrenWithProps = React.Children.map(
    obj.props.children,
    (child, j) => {
      switch (typeof child) {
        // リテラルを組版処理
        case 'string':
          return typeSet(child, i);
          break;

        // タグは再帰
        case 'object':
          return extractString(child, i + '-' + j);
          break;

        default:
          return null;
          break;
      }
    }
  );

  return <Tag {...obj.props}>{childrenWithProps}</Tag>;
}

// 組版処理
function typeSet(child, i): JSX.Element {
  let Thx = child;

  // 相殺スペース（二分）の挿入
  Thx = Thx.replace(/([‘“（〔［｛〈《「『【]+)/giu, '\u2008$1');
  Thx = Thx.replace(/([、。，．’”）〕］｝〉》」』】]+)/giu, '$1\u2008');

  // 相殺スペース（二分）を相殺
  Thx = Thx.replace(/(\u2008+)/giu, '\u2008');

  // 和欧間スペースの挿入
  Thx = Thx.replace(/([ !-;=-~p{Ll}p{No}p{S}]+)/giu, '\u2005$1\u2005');

  // 和欧間スペースを相殺
  Thx = Thx.replace(/(\u2005\u2008)/giu, '\u2008');
  Thx = Thx.replace(/(\u2008\u2005)/giu, '\u2008');

  // 相殺スペース（四分）の挿入
  Thx = Thx.replace(/([・：；]+)/giu, '\u2005$1\u2005');

  // 相殺スペース（四分）を相殺
  Thx = Thx.replace(/(\u2005+)/giu, '\u2005');
  Thx = Thx.replace(/(\u2005\u2008)/giu, '\u2005');
  Thx = Thx.replace(/(\u2008\u2005)/giu, '\u2005');

  // 分離禁止の挿入
  Thx = Thx.replace(/([‘“（〔［｛〈《「『【]+)/giu, '$1\ufeff');
  Thx = Thx.replace(/([・：；、。，．’”）〕］｝〉》」』】]+)/giu, '\ufeff$1');

  // 分離禁止に隣接するスペースを削除
  Thx = Thx.replace(/[\u2005\u2008]\ufeff/giu, '\ufeff');
  Thx = Thx.replace(/\ufeff[\u2005\u2008]/giu, '\ufeff');

  //欧文の検索
  // 両端が分離禁止の場合
  Thx = reactStringReplace(
    Thx,
    /(\ufeff[ !-;=-~p{Ll}p{No}p{S}x{200b}\u2005]{2,}\ufeff)/giu,
    (match, j) => {
      // 和欧間スペースを削除
      match = match.replace(/(\u2005+)/giu, '');
      // 分離禁止を削除
      match = match.replace(/(\ufeff+)/giu, '');
      return (
        <Fragment key={match + '-' + i + '-' + j}>
          <span className="thx_pwid">{match}</span>
        </Fragment>
      );
    }
  ); // 両端が分離禁止の場合

  // 始端が分離禁止の場合
  Thx = reactStringReplace(
    Thx,
    /(\ufeff[ !-;=-~p{Ll}p{No}p{S}x{200b}\u2005]{2,}\u2008?)/giu,
    (match, j) => {
      // 和欧間スペースを削除
      match = match.replace(/(\u2005+)/giu, '');
      // 分離禁止を削除
      match = match.replace(/(\ufeff+)/giu, '');
      // 終端が相殺スペースの場合
      if (match.substr(-1) === '\u2008') {
        // 相殺スペースを削除
        match = match.replace(/(\u2008+)/giu, '');
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      } else {
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_pwid">{match}</span>
            <span className="thx_wao_spc"> </span>
          </Fragment>
        );
      }
    }
  ); // 始端が分離禁止の場合

  // 終端が分離禁止の場合
  Thx = reactStringReplace(
    Thx,
    /(\u2008?[ !-;=-~p{Ll}p{No}p{S}x{200b}\u2005]{2,}\ufeff)/giu,
    (match, j) => {
      // 和欧間スペースを削除
      match = match.replace(/(\u2005+)/giu, '');
      // 分離禁止を削除
      match = match.replace(/(\ufeff+)/giu, '');
      // 始端が相殺スペースの場合
      if (match.substr(0, 1) === '\u2008') {
        // 相殺スペースを削除
        match = match.replace(/(\u2008+)/giu, '');
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      } else {
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_wao_spc"> </span>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      }
    }
  ); // 終端が分離禁止の場合

  // 分離禁止を伴わない場合
  Thx = reactStringReplace(
    Thx,
    /(\u2008?[ !-;=-~p{Ll}p{No}p{S}x{200b}\u2005]{2,}\u2008?)/giu,
    (match, j) => {
      // 和欧間スペースを削除
      match = match.replace(/(\u2005+)/giu, '');
      // 両端が相殺スペースの場合
      if (match.substr(0, 1) === '\u2008' && match.substr(-1) === '\u2008') {
        // 相殺スペースを削除
        match = match.replace(/(\u2008+)/giu, '');
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      }
      // 始端が相殺スペースの場合
      else if (match.substr(0, 1) === '\u2008') {
        // 相殺スペースを削除
        match = match.replace(/(\u2008+)/giu, '');
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_pwid">{match}</span>
            <span className="thx_wao_spc"> </span>
          </Fragment>
        );
      }
      // 終端が相殺スペースの場合
      else if (match.substr(-1) === '\u2008') {
        // 相殺スペースを削除
        match = match.replace(/(\u2008+)/giu, '');
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_wao_spc"> </span>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      } else {
        return (
          <Fragment key={match + '-' + i + '-' + j}>
            <span className="thx_wao_spc"> </span>
            <span className="thx_pwid">{match}</span>
            <span className="thx_wao_spc"> </span>
          </Fragment>
        );
      }
    }
  ); // 分離禁止を伴わない場合
  //欧文の検索

  //中点の検索
  Thx = reactStringReplace(Thx, /(\u2005?[・：；]+\u2005?)/giu, (match, j) => {
    // 相殺スペース（四分）を削除
    match = match.replace(/(\u2005+)/giu, '');
    if (match.length === 1) {
      // 単数の場合
      return (
        <Fragment key={match + i + '-' + j}>
          <span className="thx_mid_dot thx_fwid">{match}</span>
        </Fragment>
      );
    } else {
      // 複数の場合
      return (
        <Fragment key={match + i + '-' + j}>
          <span className="thx_mid_dot thx_halt">{match}</span>
        </Fragment>
      );
    }
  }); //中点の検索

  //始め括弧の検索
  Thx = reactStringReplace(
    Thx,
    /(\u2008?[‘“（〔［｛〈《「『【]+\ufeff?)/giu,
    (match, j) => {
      // 相殺スペース（二分）を削除
      match = match.replace(/(\u2008+)/giu, '');
      // 分離禁止を削除
      match = match.replace(/(\ufeff+)/giu, '');
      return (
        <Fragment key={match + i + '-' + j}>
          <span className="thx_clps_spc"> </span>
          <span className="thx_opening_mark">{match}</span>
        </Fragment>
      );
    }
  ); //始め括弧の検索

  //句読点と終わり括弧の検索（後端単数の句読点のみ、ぶら下がり）
  Thx = reactStringReplace(
    Thx,
    /(\ufeff?[、。，．’”）〕］｝〉》」』】]+\u2008?)/giu,
    (match, j) => {
      // 分離禁止を削除
      match = match.replace(/(\ufeff+)/giu, '');
      // 相殺スペース（二分）を削除
      match = match.replace(/(\u2008+)/giu, '');
      if (match.length === 1) {
        // 単数の場合
        if (
          // 単数の句読点はぶら下がり
          match === '、' ||
          match === '。' ||
          match === '，' ||
          match === '．'
        ) {
          return (
            <Fragment key={match + i + '-' + j}>
              <span className="thx_punc_wrap">
                <span className="thx_punctuation">{match}</span>
              </span>
              <span className="thx_clps_spc"> </span>
            </Fragment>
          );
        }
      } else {
        // 複数の場合
        if (
          // 最後の１文字が句読点、且つ
          (match.substr(-1) === '、' ||
            match.substr(-1) === '。' ||
            match.substr(-1) === '，' ||
            match.substr(-1) === '．') &&
          // 最後の２文字が同一でなければぶら下がり
          match.substr(-1) !== match.substr(-2, 1)
        ) {
          return (
            <Fragment key={match + i + '-' + j}>
              <span className="thx_closing_mark">
                {match.substr(0, match.length - 1)}
              </span>
              <span className="thx_punc_wrap">
                <span className="thx_punctuation">{match.substr(-1)}</span>
              </span>
              <span className="thx_clps_spc"> </span>{' '}
            </Fragment>
          );
        }
      }
      // 上記条件以外は、ぶら下がり不要
      return (
        <Fragment key={match + i + '-' + j}>
          <span className="thx_closing_mark">{match}</span>
          <span className="thx_clps_spc"> </span>
        </Fragment>
      );
    }
  ); //句読点と終わり括弧の検索

  // console.log(Thx);
  return Thx;
}
