import Image from 'next/image';
import { css } from 'styled-components';

type ISectionProps = {
  title?: string;
  description?: string;
  image?: any;
  imageAlt?: string;
};

export const Section = ({
  description,
  title,
  image,
  imageAlt,
}: ISectionProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-3">
        {title && <h2 className="mt-[120px] text-[32px] font-bold">{title}</h2>}
        {description && (
          <div className="mt-4 text-neutralSecondary">{description}</div>
        )}
      </div>

      {image && (
        <div
          className="w-[940px] rounded-[6px] mt-10"
          css={css`
            box-shadow: 0px 2px 8px rgba(84, 70, 35, 0.15),
              0px 1px 3px rgba(84, 70, 35, 0.15);
          `}
        >
          <Image className="rounded-[6px]" src={image} alt={imageAlt} />
        </div>
      )}
    </div>
  );
};
