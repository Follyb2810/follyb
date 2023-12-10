'use client'
import { Box, Button, Card, CardActions, CardContent, Typography, IconButton } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ContentCopy, Done, Edit, Delete } from '@mui/icons-material';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(''), 3000);
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Card elevation={3}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Image src={post?.creator?.image} alt="" sx={{ borderRadius: '50%' }} height={40} width={40} />
            <Box sx={{ marginLeft: 2 }}>
              <Typography variant="h6">{post.username}</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.creator?.email}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {post.prompt}
          </Typography>
          <Typography variant="body2" color="primary" onClick={() => handleTagClick && handleTagClick(post.tag)} sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
            {post?.tag}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Box>
            <IconButton onClick={handleCopy} size="small">
              {copied ? <Done color="primary" /> : <ContentCopy color="primary" />}
            </IconButton>
          </Box>

          {session?.user._id === post._id && pathName === '/profile' && (
            <Box sx={{ display: 'flex' }}>
              <IconButton onClick={handleEdit} size="small" sx={{ color: 'primary' }}>
                <Edit />
              </IconButton>
              <IconButton onClick={handleDelete} size="small" sx={{ color: 'error.main' }}>
                <Delete />
              </IconButton>
            </Box>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default PromptCard;
