import { BellRing, Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type CardProps = React.ComponentProps<typeof Card>;

const Book = ({ className, ...props }: CardProps) => {
  return (
    <Card className={cn('w-full md:w-[48%]', className)} {...props}>
      <CardHeader>
        <CardTitle>Book Name</CardTitle>
        <CardDescription>Book description.</CardDescription>
        <CardDescription>Book Price.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='h-36 md:h-72 rounded-md border p-4'></div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>
          <Check className='mr-2 h-4 w-4' /> Add to cart
          {/* <X className='mr-2 h-4 w-4' /> */}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Book;
