import { useRef, useState, type ChangeEvent } from 'react';
import { PhotoIcon } from '../../shared/assets/icons';

export const PhotoSlot = ({ label, isMain }: { label: string; isMain?: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center border overflow-hidden transition-colors w-70 h-90
          ${isMain ? ' border-secondary' : ' border-neutral-200 bg-[#eeeeee]'}
        `}
      >
        {preview ? (
          <img src={preview} alt="preview" className="w-full h-full" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <img src={PhotoIcon} alt="photo" width={72} />

            <p className="text-xs text-neutral-300 leading-tight w-35">{label}</p>
          </div>
        )}
      </button>

      {isMain && <p className="text-neutral-300 text-center">Главное фото</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};
