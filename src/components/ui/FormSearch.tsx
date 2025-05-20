import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

interface Option {
  title: string;
  year?: number;
}

interface FormSearchProps {
  name: string;
  label: string;
  options?: Option[];
  placeholder?: string;
  required?: boolean;
  maxSelections?: number;
  onChange: (name: string, value: string | string[]) => void;
  value?: string | string[];
  error?: boolean;
  helperText?: string;
  multiple?: boolean;
}

const FormSearch: React.FC<FormSearchProps> = ({
  name,
  label,
  options = [],
  placeholder = 'Search...',
  required = false,
  maxSelections,
  onChange,
  value = '',
  error = false,
  helperText = '',
  multiple = false
}) => {
  // For single selection mode
  const handleSingleChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    onChange(name, newValue || '');
  };

  // For multiple selection mode
  const handleMultipleChange = (_event: React.SyntheticEvent, newValues: string[]) => {
    // Enforce maxSelections if specified
    if (maxSelections && newValues.length > maxSelections) {
      // Only take first maxSelections items
      onChange(name, newValues.slice(0, maxSelections));
    } else {
      onChange(name, newValues);
    }
  };

  // Convert options for the Autocomplete component
  const autocompleteOptions = options.map((option) => option.title);

  return (
    <Stack spacing={1} sx={{ width: '100%' }}>
      {multiple ? (
        <Autocomplete
          multiple
          id={`search-${name}`}
          options={autocompleteOptions}
          value={Array.isArray(value) ? value : []}
          onChange={handleMultipleChange}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              placeholder={placeholder}
              required={required}
              error={error}
              helperText={error ? helperText : ''}
              fullWidth
            />
          )}
        />
      ) : (
        <Autocomplete
          freeSolo
          id={`search-${name}`}
          disableClearable
          options={autocompleteOptions}
          value={typeof value === 'string' ? value : ''}
          onChange={handleSingleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              placeholder={placeholder}
              required={required}
              error={error}
              helperText={error ? helperText : ''}
              fullWidth
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      )}
    </Stack>
  );
};

export default FormSearch;