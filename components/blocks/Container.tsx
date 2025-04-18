interface WrapperProps {
  children?: any;
  data?: {
    isFullscreen?: boolean;
  };
}

//Generic wrapper for block components
export const BlockWrapper = (props: WrapperProps) => {
  const { children, data } = props;
  return (
    <div
      className={
        data?.isFullscreen
          ? 'md:min-h-[70vh] pt-28 md:pt-24 md:pb-36 pb-0 flex items-center justify-center w-full'
          : 'pt-28 last:pb-30'
      }
    >
      {children}
    </div>
  );
};

//Width Limit Container
interface ContainerProps {
  children?: any;
  width?: 'medium' | 'narrow' | 'wide';
  center?: boolean;
}

export const Container = ({
  width = 'medium',
  center = false,
  children,
}: ContainerProps) => {
  return (
    <>
      <div className={['container', width, center ? 'center' : ''].join(' ')}>
        {children}
      </div>
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 20px;

          @media (min-width: 800px) {
            width: 80%;
          }
        }

        .wide {
          max-width: 1500px;

          @media (min-width: 600px) {
            width: 100%;
          }

          @media (min-width: 1000px) {
            width: 92%;
          }
        }

        .medium {
          max-width: 1350px;

          @media (min-width: 600px) {
            width: 90%;
          }

          @media (min-width: 1000px) {
            width: 80%;
          }
        }

        .narrow {
          max-width: 900px;

          @media (min-width: 600px) {
            width: 60%;
          }

          @media (min-width: 1000px) {
            width: 55%;
          }
        }

        .center {
          text-align: center;
        }
      `}</style>
    </>
  );
};
