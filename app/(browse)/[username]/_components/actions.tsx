'use client';

import { toast } from 'sonner';
import { onFollow, onUnfollow } from '@/actions/follow';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

export const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(
            `You're part of ${data.following.username}'s universe now.`
          )
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You left ${data.following.username}'s universe`)
        )
        .catch(() => toast.error('Something went wrong'));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button disabled={isPending} onClick={onClick} variant="primary">
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};
