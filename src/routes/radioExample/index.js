import React from "react";
import RadioGroup from "../../components/radioGroup";

class RadioExamplePage extends React.Component {
  render() {
    return (
      <RadioGroup value="female">
        <input type="radio" name="gender" value="male" />
        Male
        <br />
        <input type="radio" name="gender" value="female" />
        Female
        <br />
        <input type="radio" name="gender" value="other" />
        Other
        <br />
      </RadioGroup>
    );
  }
}

export default RadioExamplePage;
