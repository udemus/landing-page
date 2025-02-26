import { ImageProps } from 'next/dist/client/image';
import Image from 'next/image';
import { css } from 'styled-components';

type ISectionProps = {
  title?: string;
  description?: string;
  imageProps?: ImageProps;
};

export const Section = ({ description, title, imageProps }: ISectionProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center space-y-3">
        {title && (
          <h2 className="mt-[60px] text-[30px] md:mt-[120px] md:text-[32px] md:leading-[1.3] text-center font-bold">
            {title}
          </h2>
        )}
        {description && (
          <div className="text-[17px] md:text-[20px] mt-4 text-center text-neutralSecondary">
            {description}
          </div>
        )}
      </div>

      {imageProps && (
        <div
          className="max-w-[940px] rounded-[6px] mt-10"
          css={css`
            box-shadow: 0 2px 8px rgba(84, 70, 35, 0.15),
              0 1px 3px rgba(84, 70, 35, 0.15);
          `}
        >
          <Image className="rounded-[6px]" {...imageProps} />
        </div>
      )}
    </div>
  );
};
