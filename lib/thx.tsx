import reactStringReplace from 'react-string-replace';
import { Fragment } from 'react';

export default (props) => {
  // console.log(props);
  // console.log(children);
  // console.log(children.props.children);
  // const Tag = props.tag;
  let Thx = props.children;
  const Tag = props.tag ? props.tag : 'p';
  let key = Thx;
  Thx = Thx.replace(/([‘“（〔［｛〈《「『【・：；]+)/giu, '$1\ufeff');
  Thx = Thx.replace(/([、。，．’”）〕］｝〉》」』】]+)/giu, '\ufeff$1');
  // console.log(Thx);

  //句読点と終わり括弧の検索（後端単数の句読点のみ、ぶら下がり）
  Thx = reactStringReplace(
    Thx,
    /([、。，．’”）〕］｝〉》」』】]+)/giu,
    (match, i) => {
      // console.log(match);
      // console.log(match.length);
      // console.log(match.substr(-1));
      // console.log(match.substr(-2, 1));
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
            <Fragment key={match + i}>
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
            <Fragment key={match + i}>
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
        <Fragment key={match + i}>
          <span className="thx_closing_mark">{match}</span>
          <span className="thx_clps_spc"> </span>
        </Fragment>
      );
    }
  ); //句読点と終わり括弧の検索

  //中点の検索
  Thx = reactStringReplace(Thx, /([・：；]+)/giu, (match, i) => {
    if (match.length === 1) {
      // 単数の場合
      return (
        <Fragment key={match + i}>
          <span className="thx_mid_dot thx_fwid">{match}</span>
        </Fragment>
      );
    } else {
      // 複数の場合
      return (
        <Fragment key={match + i}>
          <span className="thx_clps_spc"> </span>
          <span className="thx_mid_dot thx_halt">{match}</span>
          <span className="thx_clps_spc"> </span>
        </Fragment>
      );
    }
  }); //中点の検索

  //始め括弧の検索
  Thx = reactStringReplace(Thx, /([‘“（〔［｛〈《「『【]+)/giu, (match, i) => (
    <Fragment key={match + i}>
      <span className="thx_clps_spc"> </span>
      <span className="thx_opening_mark">{match}</span>
    </Fragment>
  )); //始め括弧の検索

  //欧文の検索（ゼロスペースを含む場合は２文字以上）
  Thx = reactStringReplace(
    Thx,
    /([ !-;=-~p{Ll}p{No}p{S}x{200b}\ufeff]{2,})/giu,
    // /(t)/giu,
    (match, i) => {
      if (
        // 両端が分離禁止の場合
        match.substr(0, 1) === '\ufeff' &&
        match.substr(-1) === '\ufeff'
      ) {
        // console.log(match);
        return (
          <Fragment key={match + i}>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      } else if (
        // 始端が分離禁止の場合
        match.substr(0, 1) === '\ufeff'
      ) {
        return (
          <Fragment key={match + i}>
            <span className="thx_pwid">{match}</span>
            <span className="thx_wao_spc"> </span>
          </Fragment>
        );
      } else if (
        // 終端が分離禁止の場合
        match.substr(-1) === '\ufeff'
      ) {
        return (
          <Fragment key={match + i}>
            <span className="thx_wao_spc"> </span>
            <span className="thx_pwid">{match}</span>
          </Fragment>
        );
      } else {
        return (
          <Fragment key={match + i}>
            <span className="thx_wao_spc"> </span>
            <span className="thx_pwid">{match}</span>
            <span className="thx_wao_spc"> </span>
          </Fragment>
        );
      }
    }
  ); //欧文の検索

  console.log(Thx);
  return <Tag key={key}>{Thx}</Tag>;
};
