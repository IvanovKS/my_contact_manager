import { render, screen, fireEvent } from '@testing-library/react';
import ContactList from './ContactList';
import { useContactStore } from '@entities/contact/model/contactStore';
import { BrowserRouter } from 'react-router-dom';

// Мокаем navigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Мокаем zustand store
jest.mock('@entities/contact/model/contactStore', () => ({
  useContactStore: jest.fn(),
}));

describe('ContactList', () => {
  it('отображает сообщение, если список пуст', () => {
    (useContactStore as unknown as jest.Mock).mockReturnValue([]);
    render(<ContactList />, { wrapper: BrowserRouter });
    expect(screen.getByText(/ContactList is empty/i)).toBeInTheDocument();
  });

  it('отображает список контактов', () => {
    (useContactStore as unknown as jest.Mock).mockReturnValue([
      { id: 1, name: 'Alice', phone: '123' },
      { id: 2, name: 'Bob', phone: '456' },
    ]);
    render(<ContactList />, { wrapper: BrowserRouter });

    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('вызывает navigate при клике на контакт', () => {
    (useContactStore as unknown as jest.Mock).mockReturnValue([
      { id: 1, name: 'Alice', phone: '123' },
    ]);
    render(<ContactList />, { wrapper: BrowserRouter });

    fireEvent.click(screen.getByText('Alice'));
    expect(mockNavigate).toHaveBeenCalledWith('/contacts/1');
  });
});
