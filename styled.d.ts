import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary:    string;
      secondary:  string;
      tertiary:   string;
      accents:    string;
      green:      string;
      grey: {
        one:      string;
        two:      string;
        three:    string;
      };
    };

    fontSizes: {
      headers: {
        h1:       string;
        h2:       string;
        h3:       string;
        h4:       string;
        h5:       string;
        h6:       string;
      };

      paragraphs: {
        p1:       string;
        p2:       string;
        p3:       string;
        p4:       string;
        p5:       string;
        p6:       string;
        p7:       string;
        p8:       string;
      };
    };

    fontWeights: {
      light:    string;
      regular:  string;
      medium:   string;
      semiBold: string;
      bold:     string;
    };
  }
}
