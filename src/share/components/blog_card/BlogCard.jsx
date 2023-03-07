import styles from './BlogCardStyles'
import { View, Image } from 'react-native';
import {  Avatar, IconButton, MD3Colors} from 'react-native-paper'

import AppText from '../app_text/AppText';

import app_sp from 'styles/spacing';

function BlogCard(props) {
    return ( 
        <View style = {styles.blog}>
          <View style = {styles.blogList}>
              <View style= {styles.blogUser}>
                <Avatar.Image 
                  source={{
                  uri : props.image
                  }}
                  size = {18}
                />
                <AppText font="body3" style={app_sp.ms_6}>{props.userName}</AppText>
              </View >
              <View style= {styles.blogItem}>
                <Image 
                source={{
                  uri : props.image
                  }}
                  style = {styles.blogImage}
                />
                <View style={{flex: 1}}>
                  <AppText numberOfLines={3} font="h5" onPress={() => (
                    alert('blog detail')
                  )} >{props.title}</AppText>
                  <AppText font="body3">{props.time}</AppText>
                </View>
              </View>
              <View style = {styles.btnGroupBlog}>
                    <IconButton
                      size={8}
                      style= {styles.btnBlog}
                      onPress = {() => {
                        alert('chức năng 1')
                      }}
                    />
                    <IconButton 
                      size={8}
                      style= {styles.btnBlog}
                      onPress = {() => {
                        alert('chức năng 2')
                      }}
                    />
                    <IconButton 
                      size={8}
                      style= {styles.btnBlog}
                      onPress = {() => {
                        alert('chức năng 3')
                      }}
                    />
              </View>
          </View>
        </View >
     );
}
export default BlogCard;