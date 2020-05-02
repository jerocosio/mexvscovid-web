import { Platform } from 'react-primitives';
// FIXME: This is an unmaintained fork! Used for `shouldForwardProp` in native platforms (there's an open PR)
// Once the issue is merged/resolved, this should be changed back to `styled-components`
import styledW, { css as cssW, ThemeProvider as ThemeProviderW } from '@elemental-design/styled-components';
import styledP, { css as cssP, ThemeProvider as ThemeProviderP } from '@elemental-design/styled-components/primitives';

let styled, ThemeProvider, css;


if (Platform.OS === 'figma') {
  styled = styledP;
  ThemeProvider = ThemeProviderP;
  css = cssP;

  styled.div = styled.View;
  styled.button = styled.View;
  styled.span = styled.Text;
  styled.p = styled.Text;
  styled.h1 = styled.Text;
  styled.h2 = styled.Text;
  styled.h3 = styled.Text;
  styled.h4 = styled.Text;
  styled.h5 = styled.Text;
  styled.h6 = styled.Text;
  styled.img = styled.Image;
} else {
  styled = styledW;
  ThemeProvider = ThemeProviderW;
  css = cssW;

  styled.View = styled.div;
  styled.Text = styled.span;
  styled.Image = styled.img.attrs(({ source }) => ({ src: source }));
}

export { ThemeProvider, css };

export default styled;
