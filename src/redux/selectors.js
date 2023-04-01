export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilteredContacts = ({contacts, filter}) => {  
    
    if (!filter) {
        return contacts.contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.contacts.filter(({name, phone}) => {
        const normalizedName = name.toLocaleLowerCase();
        const normalizedNumber = phone.toLocaleLowerCase();
        const result = normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter);
        return result;
    })
    
    return filteredContacts;
}
