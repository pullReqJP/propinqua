import reactStringReplace from 'react-string-replace';
import { Fragment } from 'react';

export default ({ children }) => {
  // console.log(children);
  const Thx = reactStringReplace(
    children,
    // /([ !-;=-~p{Ll}p{No}p{S}x{200b}]{2,}|[ !-;=-~p{Ll}p{No}p{S}]+)/giu,
    /(t)/giu,
    (match, i) => (
      <Fragment key={i}>
        <span className="thx_wao_spc"> </span>
        <span className="thx_pwid">{match}</span>
        <span className="thx_wao_spc"> </span>
      </Fragment>
    )
  );
  console.log(Thx);
  return <>{Thx}</>;
  // return Thx;
};
