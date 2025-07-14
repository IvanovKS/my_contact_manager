import { MemoryRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import AppRoutes from "./AppRoutes";

jest.mock('../pages/ContactPage', () => () => <div>Mock Contact Page</div>);
jest.mock('../pages/ContactDetailPage', () => () => <div>Mock ContactDetail Page</div>);
jest.mock('../pages/NotFoundPage', () => () => <div>Mock Not Found</div>);

describe('AppRoutes', () => {
  it('renders ContactPage at path "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Contact Page')).toBeInTheDocument();
  });

  it('renders ContactPage at path "/contacts"', () => {
    render(
      <MemoryRouter initialEntries={['/contacts']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Contact Page')).toBeInTheDocument();
  });

    it('renders ContactDetail at path "/contacts/123"', () => {
    render(
      <MemoryRouter initialEntries={['/contacts/123']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock ContactDetail Page')).toBeInTheDocument();
  });

    it('renders NotFoundPage at unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/some/unknown/path']}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Not Found')).toBeInTheDocument();
  });
});