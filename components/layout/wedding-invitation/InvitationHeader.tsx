import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface InvitationHeaderProps {
  groomName: string;
  brideName: string;
  groomFather: string;
  brideFather: string;
  location: string;
  message: string;
}

/**
 * Renders a styled invitation header card displaying the names of the bride and groom, their fathers, a message, and the event location.
 *
 * @param groomName - The name of the groom
 * @param brideName - The name of the bride
 * @param groomFather - The name of the groom's father
 * @param brideFather - The name of the bride's father
 * @param location - The location of the event
 * @param message - A message to display at the top of the invitation
 * @returns A React element representing the invitation header card
 */
export function InvitationHeader({
  groomName,
  brideName,
  groomFather,
  brideFather,
  location,
  message
}: InvitationHeaderProps) {
  return (
    <Card className='w-full max-w-md mx-auto bg-gray-50 text-center border-none shadow-md'>
      <CardHeader className='p-4'>
        <p className='text-sm italic text-gray-600'>{message}</p>
      </CardHeader>
      <CardContent className='p-6'>
        <div className='flex justify-center mb-4'>
          <div className='w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-pink-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </div>
        </div>
        <p className='text-lg font-semibold'>{groomFather}</p>
        <p className='text-xl font-bold'>{groomName}</p>
        <p className='text-lg font-semibold'>{brideFather}</p>
        <p className='text-xl font-bold'>{brideName}</p>
        <p className='mt-4 text-sm text-gray-600'>{location}</p>
      </CardContent>
    </Card>
  );
}

export default InvitationHeader;
