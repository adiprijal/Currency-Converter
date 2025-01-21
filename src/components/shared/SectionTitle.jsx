import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className={styles.sectionTitle}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={styles.sectionTitle__title}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={styles.sectionTitle__subtitle}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;