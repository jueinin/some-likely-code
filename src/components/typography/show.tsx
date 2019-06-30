import React from 'react';
import {Component} from 'react';
import Typography, {TypographyParagraph} from "./index";

class Show extends Component {
  render() {
    return (
      <div>
        <TypographyParagraph copyable ellipsis={{
          rows: 3
        }} type={"secondary"}>
          ssssssssssssssssssssssssdasff a sf af af asf ass f af as f af asf a fsfaf,als,fasfkalsfmlkasmf
  
          ssssssssssssssssssssssssdasff a sf af af asf ass f af as f af asf a fsfaf,als,fasfkalsfmlkasmf
          ssssssssssssssssssssssssdasff a sf af af asf ass f af as f af asf a fsfaf,als,fasfkalsfmlkasmf
          ssssssssssssssssssssssssdasff a sf af af asf ass f af as f af asf a fsfaf,als,fasfkalsfmlkasmf
          ssssssssssssssssssssssssdasff a sf af af asf ass f af as f af asf a fsfaf,als,fasfkalsfmlkasmf
          ssssssssssssssssssssssssdasff a sf af af asf ass f af as f af asf a fsfaf,als,fasfkalsfmlkasmf

        </TypographyParagraph>
      </div>
    );
  }
}

export default Show;
