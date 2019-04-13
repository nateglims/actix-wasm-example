import * as React from "react";

interface Props {
  s: string;
  fetch: () => any;
}

export class App extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    const { fetch } = this.props;
    fetch().then((data: object) => {
      /*tslint:disable*/
      console.log(data);
      /*tslint:enable*/
    });
  }

  public render() {
    const { s } = this.props;
    return <h1>Hi {s}</h1>;
  }
}
