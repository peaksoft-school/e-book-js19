import { useRef, useState, type ChangeEvent } from 'react';
import { DowloandIcon } from '../../shared/assets/icons';

export const FileUpload = ({
  label,
  accept,
  hint
}: {
  label: string;
  accept: string;
  hint?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) setFileName(file.name);
  };

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className="flex items-center gap-2 border border-neutral-200 px-4 py-3 hover:border-secondary transition-colors"
    >
      <img src={DowloandIcon} alt="upload" />

      <span className="text-body-small text-neutral-300">{fileName ?? label}</span>

      {hint && !fileName && (
        <span className="text-body-small text-neutral-300 ml-auto">{hint}</span>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleChange}
      />
    </button>
  );
};
