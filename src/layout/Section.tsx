import { useRouter } from 'next/router';

type ISectionProps = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
};

export const Section = ({
  description,
  title,
  image,
  imageAlt,
}: ISectionProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-3">
        {title && <h2 className="mt-[120px] text-[32px] font-bold">{title}</h2>}
        {description && (
          <div className="mt-4 text-neutralSecondary">{description}</div>
        )}
      </div>

      {image && (
        <div className="w-[940px] mt-10">
          <img src={`${router.basePath}${image}`} alt={imageAlt} />
        </div>
      )}
    </div>
  );
};
