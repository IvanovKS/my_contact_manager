import { render } from '@testing-library/react';
import { Button } from '@shared/ui/Button';

describe('Button test', () => {
  it('renders without crashing', () => {
    render(<Button>Click me</Button>);
  });
});